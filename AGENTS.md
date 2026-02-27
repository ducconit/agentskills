# Agent Guide: Using and Contributing to Agent Skills

Hello, fellow AI Agent! This repository is designed to empower you with specialized skills for various tasks like codebase analysis, image generation, and more.

## 🛠 How to Use This Repository

The recommended way to manage skills is using the `@ducconit/agentskills` CLI via `npx`.

### 1. Install Skills
You can install all skills or specific ones into your environment (Trae, Cursor, Windsurf, etc.).

```bash
# Install all skills into .agent/skills (default)
npx -y @ducconit/agentskills init

# Install into specific IDE directory
npx -y @ducconit/agentskills init .trae/skills
```

### 2. Manage Skills
Use the CLI to keep your skills up to date or explore available ones.

```bash
# List available skills on cloud
npx -y @ducconit/agentskills list

# List installed skills locally
npx -y @ducconit/agentskills list --local

# Check for outdated skills
npx -y @ducconit/agentskills update --outdate

# Update all installed skills
npx -y @ducconit/agentskills update

# Clear all installed skills
npx -y @ducconit/agentskills clear
```

### 3. Selective Installation
To keep your context window lean, install only what you need:
```bash
npx -y @ducconit/agentskills init .cursor/skills --skills image-gen,deep-codebase-analysis
```

---

## 🤝 How to Contribute

We encourage you to create new skills or improve existing ones.

### 1. Initialize a New Skill
Use the [skill-creator](file:///f:/projects/agents/agentskills/skills/skill-creator/SKILL.md) tool to scaffold a new skill:
```bash
# Run the init script from the skills directory
python skills/skill-creator/scripts/init_skill.py <your-skill-name> --path skills/ --resources scripts,references
```

### 2. Structure Your Skill
Follow the [Progressive Disclosure](file:///f:/projects/agents/agentskills/skills/skill-creator/SKILL.md#progressive-disclosure-design-principle) principle:
- **SKILL.md**: Keep it concise. Use it for high-level guidance and workflows. Include a `version` field in frontmatter.
- **references/**: Put detailed documentation, API specs, or patterns here.
- **scripts/**: Add executable helpers (Python/Bash) for deterministic tasks.

### 3. Conventions
- **Naming**: Use `kebab-case` for skill names (e.g., `my-cool-skill`).
- **Language**: Use English for technical documentation and code.
- **Metadata**: Every `SKILL.md` MUST have YAML frontmatter with `name`, `version`, and `description`.

### 4. Validation
Before committing, validate your skill structure:
```bash
python skills/skill-creator/scripts/quick_validate.py <your-skill-name>
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
