# Google Gen AI Pro SDK Image Reference

Technical summary for professional image generation and editing using the `google-genai` Python SDK.

## Core Models
- **Gemini Native**: 
  - `gemini-2.5-flash-image` (Fast, efficient)
  - `gemini-3.1-flash-image-preview` (Next-gen speed & quality)
  - `gemini-3-pro-image-preview` (Advanced reasoning, high-fidelity text)
- **Imagen 3**: `imagen-3.0-generate-002` (Classic high-fidelity)

## Professional Capabilities

### 1. Multi-Image Editing (Image-to-Image)
Used for modifying existing assets or scene composition.
- **Max Inputs**: Up to 14 images.
- **Implementation**:
```python
contents = ["Make the background a snowy forest", Image.open("subject.png")]
response = client.models.generate_content(
    model='gemini-2.5-flash-image',
    contents=contents,
    config=types.GenerateContentConfig(response_modalities=["IMAGE"])
)
```

### 2. Batch Generation
Generate multiple variations in one call (Imagen only).
- **Max Count**: 4 images.
- **Implementation**:
```python
config = types.GenerateImagesConfig(number_of_images=4)
response = client.models.generate_images(model='imagen-3.0-generate-002', prompt='...', config=config)
```

### 3. Resolution Presets
Professional mapping for quality control:
- **1K**: ~1024px (Draft/Testing)
- **2K**: ~2048px (Standard Delivery)
- **4K**: ~4096px (High-end Asset)

## SDK Methods Summary

| Method | Best For | Key Parameters |
|--------|----------|----------------|
| `generate_content` | Native Models, Editing | `contents` (list of text/images), `response_modalities` |
| `generate_images` | Imagen Models, Batching | `prompt` (string), `number_of_images`, `aspect_ratio` |

## Requirements
- Libraries: `google-genai`, `Pillow`.
- Modern Runtime: Compatible with `uv run` (PEP 723).
