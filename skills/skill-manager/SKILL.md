---
name: skill-manager
description: Agent can update and synchronize skills from this repository to various IDEs (Cursor, Trae, Windsurf) and AI Agents using the agentskills.sh script.
---

# Skill Manager

## Overview

The Skill Manager allows an AI Agent to synchronize the latest skills from this repository into the appropriate configuration directories of different IDEs and AI Agents. This ensures that the Agent always has access to the most up-to-date capabilities.

## Supported IDEs & Agents

By default, this skill supports the following conventions:

1. **Trae**: `agentskills.sh .trae/skills`
2. **Cursor**: `agentskills.sh .cursor/skills`
3. **Windsurf**: `agentskills.sh .windsurf/skills`
4. **Anigravity**: `agentskills.sh .agent/skills`
5. **OpenClaw**: `agentskills.sh .openclaw/skills`

## How it Works

The Agent uses the `agentskills.sh` script to perform a synchronization. The script copies all skill directories while automatically excluding repository-specific files like `.github`, `README.md`, `AGENTS.md`, and the script itself.

### Key Features:
- **Online/Offline Flexibility**: Run directly from GitHub via `curl` (online) or install the script locally using `--include-script` (offline).
- **List Available Skills**: View all skills on GitHub using `--list` or `-l`.
- **Selective Installation**: Install specific skills using `--skills skill1,skill2`.
- **Automatic Exclusions**: Keeps target directories clean by excluding metadata files (unless explicitly requested).
- **Directory Creation**: Automatically creates target directories if they don't exist.
- **Efficient Sync**: Uses `rsync` if available for incremental updates.

## Workflow

1. **Identify Target**: Determine the IDE or Agent environment being used.
2. **Explore Skills**: Use `./agentskills.sh --list` to see what's available.
3. **Choose Mode**: Decide whether to sync everything or just specific skills.
4. **Execute Sync**: Run the `./agentskills.sh <target_directory> [--skills <list>]` command.
5. **Verify**: Ensure the skills are correctly copied to the destination.

## Usage Guide

To update your current environment's skills, ask the Agent:
- **Online (No clone needed)**: `curl -s https://raw.githubusercontent.com/ducconit/agentskills/main/agentskills.sh | bash -s -- .cursor/skills`
- **Enable Offline Use**: `curl -s https://raw.githubusercontent.com/ducconit/agentskills/main/agentskills.sh | bash -s -- .cursor/skills --include-script`
- **List Skills**: `bash agentskills.sh --list`
- **Selective Install**: `bash agentskills.sh .trae/skills --skills image-gen`

## Resources

### scripts/
- [agentskills.sh](../agentskills.sh): The main synchronization script located at the root of the repository.
