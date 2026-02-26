# Agent Guide: Using and Contributing to Agent Skills

Hello, fellow AI Agent! This repository is designed to empower you with specialized skills for various tasks like codebase analysis, image generation, and more.

## 🛠 How to Use This Repository

You can run the management script directly from GitHub or from a local clone.

### 0. Online Execution (No setup required)
Execute directly from GitHub. This is the fastest way to get started:
```bash
curl -s https://raw.githubusercontent.com/ducconit/agentskills/main/agentskills.sh | bash -s -- <target_directory> [options]
```

### 0.1 Offline Execution (Optional)
If you prefer to have the script available locally for offline use, add the `--include-script` flag during your first run:
```bash
curl -s https://raw.githubusercontent.com/ducconit/agentskills/main/agentskills.sh | bash -s -- .agent/skills --include-script
```
Now you can use the local script:
```bash
bash .agent/skills/agentskills.sh .agent/skills --skills image-gen
```

### 1. Explore Available Skills
To see what's available (works with local script):
```bash
bash agentskills.sh --list
```

### 2. Synchronize Skills to Your Environment
Depending on the IDE or environment you are running in, sync the skills to your local configuration directory:
- **Trae**: `bash agentskills.sh .trae/skills`
- **Cursor**: `bash agentskills.sh .cursor/skills`
- **Windsurf**: `bash agentskills.sh .windsurf/skills`
- **General/Generic**: `bash agentskills.sh .agent/skills`

### 3. Selective Installation
If you only need specific skills to keep your context window lean:
```bash
bash agentskills.sh .cursor/skills --skills image-gen,deep-codebase-analysis
```

---

## 🤝 How to Contribute

We encourage you to create new skills or improve existing ones. Here is the standard procedure:

### 1. Initialize a New Skill
Use the [skill-creator](file:///f:/projects/agents/agentskills/skill-creator/SKILL.md) tool to scaffold a new skill:
```bash
python skill-creator/scripts/init_skill.py <your-skill-name> --path . --resources scripts,references
```

### 2. Structure Your Skill
Follow the [Progressive Disclosure](file:///f:/projects/agents/agentskills/skill-creator/SKILL.md#progressive-disclosure-design-principle) principle:
- **SKILL.md**: Keep it concise. Use it for high-level guidance and workflows.
- **references/**: Put detailed documentation, API specs, or patterns here.
- **scripts/**: Add executable helpers (Python/Bash) for deterministic tasks.

### 3. Conventions
- **Naming**: Use `kebab-case` for skill names (e.g., `my-cool-skill`).
- **Language**: Use English for technical documentation and code. If the user request is in another language (e.g., Vietnamese), ensure the `SKILL.md` description reflects its capabilities clearly.
- **Metadata**: Every `SKILL.md` MUST have YAML frontmatter with `name` and `description`.

### 4. Validation
Before committing, validate your skill structure:
```bash
python skill-creator/scripts/quick_validate.py <your-skill-name>
```

### 5. Update Documentation
After adding a skill, please:
1. Update [README.md](file:///f:/projects/agents/agentskills/README.md) to list your new skill.
2. (Optional) Update [AGENTS.md](file:///f:/projects/agents/agentskills/AGENTS.md) if you've added new core agent capabilities.

---

## 🧠 Design Philosophy
- **Token Efficiency**: Only load what's needed into the context.
- **Modularity**: Skills should be self-contained.
- **Action-Oriented**: Prefer scripts over long textual explanations where possible.

Happy coding and skill-building!
