#!/bin/bash
# -----------------------------------------------------------------------------
# Agent Skills Installer/Updater
# Usage: ./agentskills.sh [target_directory] [options]
# Options:
#   --list, -l             List all available skills on GitHub
#   --skills <skill_list>  Specify a comma-separated list of skills to install
#   --include-script       Also copy this script to the target for offline use
#
# Examples:
#   ./agentskills.sh --list
#   ./agentskills.sh .cursor/skills
#   ./agentskills.sh .trae/skills --skills image-gen,deep-codebase-analysis
#   curl -s https://raw.githubusercontent.com/ducconit/agentskills/main/agentskills.sh | bash -s -- .agent/skills --include-script
# -----------------------------------------------------------------------------

TARGET_DIR=""
SELECTED_SKILLS=""
LIST_ONLY=false
INCLUDE_SELF=false
REPO_URL="https://api.github.com/repos/ducconit/agentskills/contents/"
# Default exclude list
EXCLUDE_LIST=(".github" "README.md" "AGENTS.md" ".git")

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --list|-l)
            LIST_ONLY=true
            shift
            ;;
        --skills)
            SELECTED_SKILLS="$2"
            shift 2
            ;;
        --include-script)
            INCLUDE_SELF=true
            shift
            ;;
        *)
            if [ -z "$TARGET_DIR" ]; then
                TARGET_DIR="$1"
                shift
            else
                echo "Error: Invalid argument: $1"
                exit 1
            fi
            ;;
    esac
done

# Add script to exclude list if not explicitly requested
if [ "$INCLUDE_SELF" = false ]; then
    EXCLUDE_LIST+=("agentskills.sh")
fi

# List Skills Feature
if [ "$LIST_ONLY" = true ]; then
    echo "--- Available Skills on GitHub ---"
    if command -v curl >/dev/null 2>&1; then
        SKILLS_JSON=$(curl -s "$REPO_URL")
        if [ $? -eq 0 ] && [[ "$SKILLS_JSON" == *"name"* ]]; then
            echo "$SKILLS_JSON" | grep '"name":' | sed -E 's/.*"name": "([^"]+)".*/\1/' | while read -r item; do
                IS_EXCLUDED=false
                for ex in "${EXCLUDE_LIST[@]}"; do
                    if [[ "$item" == "$ex" || "$item" == "agentskills.sh" ]]; then IS_EXCLUDED=true; break; fi
                done
                if [ "$IS_EXCLUDED" = false ] && [[ ! "$item" == .* ]]; then
                    echo " ⭐ $item"
                fi
            done
        else
            echo "⚠️ Could not connect to GitHub API. Listing locally..."
            ls -d */ 2>/dev/null | sed 's/\///' | while read -r item; do
                IS_EXCLUDED=false
                for ex in "${EXCLUDE_LIST[@]}"; do
                    if [[ "$item" == "$ex" || "$item" == "agentskills.sh" ]]; then IS_EXCLUDED=true; break; fi
                done
                if [ "$IS_EXCLUDED" = false ] && [[ ! "$item" == .* ]]; then
                    echo " ⭐ $item"
                fi
            done
        fi
    else
        echo "⚠️ 'curl' not found. Listing locally..."
        ls -d */ 2>/dev/null | sed 's/\///' | while read -r item; do
            IS_EXCLUDED=false
            for ex in "${EXCLUDE_LIST[@]}"; do
                if [[ "$item" == "$ex" || "$item" == "agentskills.sh" ]]; then IS_EXCLUDED=true; break; fi
            done
            if [ "$IS_EXCLUDED" = false ] && [[ ! "$item" == .* ]]; then
                echo " ⭐ $item"
            fi
        done
    fi
    exit 0
fi

# Validate TARGET_DIR
if [ -z "$TARGET_DIR" ]; then
    echo "Error: Please specify a target directory."
    echo "Usage: ./agentskills.sh <target_directory> [--skills skill1,skill2,...] [--include-script]"
    echo "       ./agentskills.sh --list"
    exit 1
fi

# Create target directory
mkdir -p "$TARGET_DIR"

if [ -n "$SELECTED_SKILLS" ]; then
    echo "Installing selected skills: $SELECTED_SKILLS to $TARGET_DIR..."
    IFS=',' read -ra SKILLS_ARRAY <<< "$SELECTED_SKILLS"
    for skill in "${SKILLS_ARRAY[@]}"; do
        skill=$(echo "$skill" | xargs)
        if [ -d "$skill" ]; then
            echo " - Syncing skill: $skill"
            cp -rf "$skill" "$TARGET_DIR/"
        else
            echo " ⚠️ Warning: Local skill '$skill' not found. Ensure you are in the repo root."
        fi
    done
    # Copy self if requested
    if [ "$INCLUDE_SELF" = true ]; then
        if [ -f "agentskills.sh" ]; then
            cp -f "agentskills.sh" "$TARGET_DIR/"
        else
            # If running via curl | bash, we can try to download it
            curl -s https://raw.githubusercontent.com/ducconit/agentskills/main/agentskills.sh > "$TARGET_DIR/agentskills.sh"
            chmod +x "$TARGET_DIR/agentskills.sh"
        fi
    fi
else
    echo "Updating all skills to: $TARGET_DIR..."
    if command -v rsync >/dev/null 2>&1; then
        RSYNC_EXCLUDES=""
        for item in "${EXCLUDE_LIST[@]}"; do
            RSYNC_EXCLUDES="$RSYNC_EXCLUDES --exclude=$item"
        done
        rsync -av --delete ./ "$TARGET_DIR/" $RSYNC_EXCLUDES
    else
        for item in *; do
            if [[ "$item" == "*" ]]; then continue; fi
            IS_EXCLUDED=false
            for ex in "${EXCLUDE_LIST[@]}"; do
                if [[ "$item" == "$ex" ]]; then
                    IS_EXCLUDED=true
                    break
                fi
            done
            if [ "$IS_EXCLUDED" = false ]; then
                cp -rf "$item" "$TARGET_DIR/"
            fi
        done
    fi
fi

echo "-------------------------------------------------------"
echo "✅ Skills updated successfully at: $TARGET_DIR"
if [ "$INCLUDE_SELF" = true ]; then
    echo "💡 agentskills.sh is now available in the target directory for offline use."
fi
echo "-------------------------------------------------------"
