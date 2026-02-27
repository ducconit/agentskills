---
name: image-gen
description: Professional image generation & editing using Google's NEW Gen AI SDK (google-genai). Supports text-to-image and image-to-image (editing). Features 1K/2K/4K resolutions, multi-image input, and batch generation.
---

# Image Generation & Editing Skill (Pro Edition)

This skill provides a professional-grade interface for image generation and editing using the latest **Google Gen AI SDK** (`google-genai`). It is inspired by advanced agent workflows and supports both **Gemini Native Image** models and **Imagen 3**.

## Overview

The skill provides advanced capabilities for professional asset production:
- **Unified Pro Architecture**: Supports both `gemini-2.5-flash-image` (Native) and `imagen-3.0-generate-002` (Imagen).
- **Multi-Image Input**: Edit existing assets or compose scenes using up to 14 input images.
- **Resolution & Aspect Ratio**: Professional control via `1K`/`2K`/`4K` presets and flexible aspect ratios (default: `wide`).
- **Batch Generation**: Generate up to 4 images in a single request.
- **Auto-naming & MEDIA Support**: Automatically generates filenames like `output_image_DD-MM-YYYY_N.png` and prints `MEDIA` tokens for immediate agent integration.

## Usage Guide

### Model Selection
- **Gemini Native Models** (Fast, supports `generate_content` flow):
  - `gemini-2.5-flash-image` (Default)
  - `gemini-3.1-flash-image-preview` (Newer, improved quality)
  - `gemini-3-pro-image-preview` (Professional assets, highest reasoning)
- **Imagen 3 Models** (Legacy flow):
  - `imagen-3.0-generate-002`

### Image Generation Workflow (Draft → Final)
1. **Draft (1K)**: Default quality, quick feedback loop for prompt testing.
2. **Iterate**: Adjust prompt and aspect ratio based on results.
3. **Final (4K)**: High-resolution export for final delivery.

### Image Editing (Image-to-Image)
To modify existing images or provide reference assets:
- Use the `-i` or `--input-image` parameter (can be used multiple times).
- Provide editing instructions in the `--prompt`.

### Parameters
- **--prompt**: (Required) Image description or editing instructions.
- **--resolution**: `1K` (~1024px), `2K` (~2048px), `4K` (~4096px). Default: `1K`.
- **--aspect-ratio**: Dimensions (e.g., `wide`, `portrait`, `16:9`, `1:1`). Default: `wide`.
- **--count**: Number of images to generate (1-4). Default: `1`.
- **-i, --input-image**: Path to input image(s) for editing.
- **--api-key**: Google AI API Key (overrides env vars).
- **--filename**: Optional custom output name.

### Prompt Examples
- **Basic**: `python scripts/generate_image.py --prompt "A serene Japanese garden" --resolution 2K`
- **Editing**: `python scripts/generate_image.py --prompt "add a robotic dragon" -i garden.png --resolution 4K`
- **Batch**: `python scripts/generate_image.py --prompt "Futuristic logo" --count 4 --aspect-ratio square`

## Resources

### Scripts (`scripts/`)
- `generate_image.py`: Professional script using the `google-genai` SDK and Pillow.
  - **Setup**: `pip install -U google-genai Pillow`
  - **Output**: Prints `MEDIA: <absolute-path>` for UI integration.
- `list_models.py`: Utility to find available image generation models.

## Important Notes
- Requires a valid API key from [Google AI Studio](https://aistudio.google.com/).
- Uses PEP 723 for modern dependency management (compatible with `uv run`).
- Always converts images to **RGB PNG** for maximum compatibility.
