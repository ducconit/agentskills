---
name: conventional-commits-compliance
description: Agent capable of analyzing source code changes and crafting professional commit messages that adhere to the Conventional Commits 1.0.0 specification.
---

# Conventional Commits Compliance

## Overview

This skill enables the Agent to perform professional and responsible commits by analyzing all source code changes and creating commit messages that strictly follow the Conventional Commits specification. This ensures a clear, meaningful commit history and supports automation for changelogs and versioning.

## Core Capabilities

### 1. Specification Mastery
- Deep understanding of the standard commit message structure:
  `<type>[optional scope]: <description>`
  `[optional body]`
  `[optional footer(s)]`

### 2. Accurate Change Categorization
- Identify the nature of each change to select the correct `type`:
  - `feat`: New feature.
  - `fix`: Bug fix.
  - Others: `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, etc.

### 3. Scope Identification
- Recognize specific modules or components affected by changes to provide an appropriate `scope` (e.g., `feat(parser):`, `fix(api):`).

### 4. Breaking Changes Detection
- Identify breaking changes (API changes, feature removals) and mark them clearly using:
  - The `!` indicator before the colon (e.g., `feat!:`, `chore(api)!:`).
  - The `BREAKING CHANGE:` footer with a detailed description.

### 5. Concise Description Writing
- Craft short, imperative-style descriptions (50-70 characters) summarizing the **content of the change**, not just the task performed.

### 6. Body and Footer Composition
- Use the `body` to explain the **why** and context.
- Use the `footer` for metadata like `BREAKING CHANGE:`, `Refs: #123`, etc.

### 7. "One Commit - One Purpose" Principle
- Recommend splitting changes into separate commits if they belong to different types to ensure clarity.

## Workflow

1. **Diff Analysis**: Examine all changes in the working directory/staging area to understand the files added, modified, or deleted.
2. **Determine Change Type**: Decide the primary `type` based on the analysis.
3. **Identify Scope**: Propose a relevant scope based on file paths.
4. **Check for Breaking Changes**: Determine if any change breaks backward compatibility.
5. **Generate Commit Message**: Draft the full message according to the structure.
6. **Review & Confirm**: Present the message for user confirmation, especially for complex changes.

## Usage Guide

Ask the Agent:
- "Analyze my current changes and suggest a Conventional Commit message."
- "Create a commit message for this bug fix in the auth module."
- "I've made breaking changes to the API, help me write a compliant commit message."

## Resources

### references/
- [types_and_scopes.md](references/types_and_scopes.md): Detailed list of allowed types and scope conventions.
- [breaking_changes.md](references/breaking_changes.md): Guidelines on how to handle and document breaking changes.
- [examples.md](references/examples.md): A collection of standard and complex commit message examples.
