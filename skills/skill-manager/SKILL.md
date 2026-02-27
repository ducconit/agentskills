---
name: skill-manager
version: 1.0.0
description: Agent can update and synchronize skills from this repository to various IDEs (Cursor, Trae, Windsurf) and AI Agents using the `@ducconit/agentskills` CLI via `npx`.
---

# Skill Manager

## Overview

The Skill Manager allows an AI Agent to synchronize the latest skills from this repository into the appropriate configuration directories of different IDEs and AI Agents. This ensures that the Agent always has access to the most up-to-date capabilities.

## Supported IDEs & Agents

By default, this skill supports the following conventions for installation directories:

1. **Trae**: `.trae/skills`
2. **Cursor**: `.cursor/skills`
3. **Windsurf**: `.windsurf/skills`
4. **General/Generic**: `.agent/skills`

## How it Works

The Agent uses the `@ducconit/agentskills` CLI (via `npx`) to perform management tasks.

### Key Commands:
- **`init`**: Install skills to a target directory.
  - `-f, --force`: Overwrite existing skills.
  - `--clean`: Clear target directory before installing.
  - `--skills <list>`: Install specific skills (comma-separated).
- **`list`**: View available skills.
  - `--local`: View skills already installed in the project.
  - `--diff`: See which skills are available on cloud but not yet installed locally.
- **`update`**: Update outdated skills.
  - `--outdate`: List skills that have a newer version on cloud.
- **`clear`**: Remove all installed skills from the target directory.

## Workflow

1. **Identify Target**: Determine the IDE or Agent environment being used (e.g., Trae).
2. **Explore Skills**: Run `npx -y @ducconit/agentskills list` to see what's available.
3. **Initialize/Install**: Run `npx -y @ducconit/agentskills init <target_directory>` (e.g., `init .trae/skills`).
4. **Maintain**: Periodically check for updates using `npx -y @ducconit/agentskills update --outdate`.
5. **Clean Up**: Use `clear` if you need to remove the installed skills.

## Usage Guide

To manage your current environment's skills, ask the Agent:
- **Install all skills**: `npx -y @ducconit/agentskills init`
- **Check for updates**: `npx -y @ducconit/agentskills update --outdate`
- **Update everything**: `npx -y @ducconit/agentskills update`
- **Selective Install**: `npx -y @ducconit/agentskills init .trae/skills --skills image-gen`
- **View diff**: `npx -y @ducconit/agentskills list --diff`
