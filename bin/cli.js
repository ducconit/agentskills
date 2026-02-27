#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');

const program = new Command();

const EXCLUDE_LIST = [".github", ".git", "node_modules", "package.json", "package-lock.json", "bin"];

program
  .name('agentskills')
  .description('Specialized skills for AI Agents')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize skills in a target directory')
  .argument('[target_directory]', 'The directory to install skills into', '.agent/skills')
  .option('-s, --skills <skills>', 'Comma-separated list of skills to install')
  .option('-l, --list', 'List available skills')
  .action(async (targetDir, options) => {
    const sourceDir = path.join(__dirname, '..', 'skills');

    // Get available skills from local folders
    const getAvailableSkills = () => {
      if (!fs.existsSync(sourceDir)) return [];
      return fs.readdirSync(sourceDir)
        .filter(file => {
          const fullPath = path.join(sourceDir, file);
          return fs.statSync(fullPath).isDirectory() && !file.startsWith('.');
        });
    };

    if (options.list) {
      const skills = getAvailableSkills();
      console.log(chalk.bold('--- Available Skills ---'));
      skills.forEach(skill => console.log(chalk.green(` ⭐ ${skill}`)));
      return;
    }

    const absoluteTargetDir = path.resolve(process.cwd(), targetDir);
    console.log(chalk.blue(`Initializing skills at: ${absoluteTargetDir}`));

    try {
      await fs.ensureDir(absoluteTargetDir);

      const availableSkills = getAvailableSkills();
      let skillsToInstall = [];

      if (options.skills) {
        skillsToInstall = options.skills.split(',').map(s => s.trim());
      } else {
        skillsToInstall = availableSkills;
      }

      for (const skill of skillsToInstall) {
        if (availableSkills.includes(skill)) {
          console.log(` - Syncing skill: ${chalk.cyan(skill)}`);
          const skillSource = path.join(sourceDir, skill);
          const skillTarget = path.join(absoluteTargetDir, skill);
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

program.parse(process.argv);
