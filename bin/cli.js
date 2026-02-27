#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

const program = new Command();

const EXCLUDE_LIST = [".github", ".git", "node_modules", "package.json", "package-lock.json", "bin"];

// Helper to parse version from SKILL.md frontmatter
const getSkillVersion = (skillPath) => {
  const skillMdPath = path.join(skillPath, 'SKILL.md');
  if (!fs.existsSync(skillMdPath)) return '0.0.0';
  const content = fs.readFileSync(skillMdPath, 'utf8');
  const match = content.match(/version:\s*([0-9.]+)/);
  return match ? match[1] : '0.0.0';
};

program
  .name('agentskills')
  .description('Specialized skills for AI Agents')
  .version('1.0.0');

// --- INIT COMMAND ---
program
  .command('init')
  .description('Install skills in a target directory')
  .argument('[target_directory]', 'The directory to install skills into', '.agent/skills')
  .option('-s, --skills <skills>', 'Comma-separated list of skills to install')
  .option('-f, --force', 'Overwrite existing skills', false)
  .option('--clean', 'Remove target directory before installing', false)
  .action(async (targetDir, options) => {
    const sourceDir = path.join(__dirname, '..', 'skills');
    const getAvailableSkills = () => {
      if (!fs.existsSync(sourceDir)) return [];
      return fs.readdirSync(sourceDir)
        .filter(file => fs.statSync(path.join(sourceDir, file)).isDirectory() && !file.startsWith('.'));
    };

    const absoluteTargetDir = path.resolve(process.cwd(), targetDir);
    if (options.clean && fs.existsSync(absoluteTargetDir)) {
      console.log(chalk.yellow(`Cleaning target directory: ${absoluteTargetDir}`));
      await fs.remove(absoluteTargetDir);
    }

    console.log(chalk.blue(`Initializing skills at: ${absoluteTargetDir}`));
    try {
      await fs.ensureDir(absoluteTargetDir);
      const availableSkills = getAvailableSkills();
      const skillsToInstall = options.skills ? options.skills.split(',').map(s => s.trim()) : availableSkills;

      for (const skill of skillsToInstall) {
        if (availableSkills.includes(skill)) {
          const skillSource = path.join(sourceDir, skill);
          const skillTarget = path.join(absoluteTargetDir, skill);
          if (fs.existsSync(skillTarget) && !options.force && !options.clean) {
            console.log(chalk.gray(` - Skill already exists (skipped): ${skill}`));
            continue;
          }
          console.log(` - Syncing skill: ${chalk.cyan(skill)} (v${getSkillVersion(skillSource)})`);
          await fs.copy(skillSource, skillTarget, { overwrite: true });
        } else {
          console.warn(chalk.yellow(` ⚠️ Warning: Skill '${skill}' not found.`));
        }
      }
      console.log(chalk.green.bold('\n✅ Skills initialized successfully!'));
    } catch (error) {
      console.error(chalk.red(`Error: ${error.message}`));
      process.exit(1);
    }
  });

// --- LIST COMMAND ---
program
  .command('list')
  .description('List skills')
  .option('--local', 'List installed skills in target directory')
  .option('--diff', 'Show skills that are not installed yet')
  .argument('[target_directory]', 'Target directory to check for local skills', '.agent/skills')
  .action(async (targetDir, options) => {
    const sourceDir = path.join(__dirname, '..', 'skills');
    const getCloudSkills = () => {
      if (!fs.existsSync(sourceDir)) return [];
      return fs.readdirSync(sourceDir)
        .filter(file => fs.statSync(path.join(sourceDir, file)).isDirectory() && !file.startsWith('.'));
    };

    const cloudSkills = getCloudSkills();
    const absoluteTargetDir = path.resolve(process.cwd(), targetDir);
    const getLocalSkills = () => {
      if (!fs.existsSync(absoluteTargetDir)) return [];
      return fs.readdirSync(absoluteTargetDir)
        .filter(file => fs.statSync(path.join(absoluteTargetDir, file)).isDirectory() && !file.startsWith('.'));
    };

    const localSkills = getLocalSkills();

    if (options.local) {
      console.log(chalk.bold(`--- Installed Skills in ${targetDir} ---`));
      if (localSkills.length === 0) console.log(chalk.gray(' No skills installed.'));
      localSkills.forEach(skill => {
        const version = getSkillVersion(path.join(absoluteTargetDir, skill));
        console.log(chalk.green(` ✅ ${skill} (v${version})`));
      });
    } else if (options.diff) {
      console.log(chalk.bold(`--- Skills not yet installed in ${targetDir} ---`));
      const diff = cloudSkills.filter(s => !localSkills.includes(s));
      if (diff.length === 0) console.log(chalk.gray(' All available skills are already installed.'));
      diff.forEach(skill => console.log(chalk.yellow(` ➕ ${skill}`)));
    } else {
      console.log(chalk.bold('--- Available Skills (Cloud) ---'));
      cloudSkills.forEach(skill => {
        const version = getSkillVersion(path.join(sourceDir, skill));
        const status = localSkills.includes(skill) ? chalk.green('[Installed]') : '';
        console.log(chalk.cyan(` ⭐ ${skill} (v${version}) ${status}`));
      });
    }
  });

// --- UPDATE COMMAND ---
program
  .command('update')
  .description('Update outdated skills')
  .argument('[target_directory]', 'The directory where skills are installed', '.agent/skills')
  .option('--outdate', 'Only list outdated skills without updating')
  .action(async (targetDir, options) => {
    const sourceDir = path.join(__dirname, '..', 'skills');
    const absoluteTargetDir = path.resolve(process.cwd(), targetDir);
    
    if (!fs.existsSync(absoluteTargetDir)) {
      console.error(chalk.red(`Error: Target directory ${targetDir} does not exist.`));
      return;
    }

    const localSkills = fs.readdirSync(absoluteTargetDir)
      .filter(file => fs.statSync(path.join(absoluteTargetDir, file)).isDirectory() && !file.startsWith('.'));

    const outdated = [];
    for (const skill of localSkills) {
      const cloudPath = path.join(sourceDir, skill);
      if (fs.existsSync(cloudPath)) {
        const localVer = getSkillVersion(path.join(absoluteTargetDir, skill));
        const cloudVer = getSkillVersion(cloudPath);
        if (localVer !== cloudVer) {
          outdated.push({ name: skill, local: localVer, cloud: cloudVer });
        }
      }
    }

    if (outdated.length === 0) {
      console.log(chalk.green('✨ All skills are up to date.'));
      return;
    }

    if (options.outdate) {
      console.log(chalk.bold('--- Outdated Skills ---'));
      outdated.forEach(s => console.log(chalk.yellow(` ⚠️ ${s.name}: ${s.local} -> ${s.cloud}`)));
      return;
    }

    console.log(chalk.blue(`Updating ${outdated.length} skills in ${targetDir}...`));
    for (const s of outdated) {
      console.log(` - Updating ${chalk.cyan(s.name)} (${s.local} -> ${s.cloud})`);
      await fs.copy(path.join(sourceDir, s.name), path.join(absoluteTargetDir, s.name), { overwrite: true });
    }
    console.log(chalk.green.bold('\n✅ Updates completed!'));
  });

// --- CLEAR COMMAND ---
program
  .command('clear')
  .description('Remove all installed skills from target directory')
  .argument('[target_directory]', 'The directory to clear', '.agent/skills')
  .action(async (targetDir) => {
    const absoluteTargetDir = path.resolve(process.cwd(), targetDir);
    if (!fs.existsSync(absoluteTargetDir)) {
      console.log(chalk.gray(`Directory ${targetDir} does not exist.`));
      return;
    }
    
    const localSkills = fs.readdirSync(absoluteTargetDir)
      .filter(file => fs.statSync(path.join(absoluteTargetDir, file)).isDirectory() && !file.startsWith('.'));

    if (localSkills.length === 0) {
      console.log(chalk.gray('No skills found to remove.'));
      return;
    }

    console.log(chalk.yellow(`Removing ${localSkills.length} skills from ${targetDir}...`));
    for (const skill of localSkills) {
      console.log(` - Removing ${chalk.red(skill)}`);
      await fs.remove(path.join(absoluteTargetDir, skill));
    }
    console.log(chalk.green.bold('\n✅ Target directory cleared!'));
  });

program.parse(process.argv);
