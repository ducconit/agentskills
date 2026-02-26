#!/usr/bin/env python3
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "google-genai>=1.0.0",
#     "pillow>=10.0.0",
# ]
# ///
"""
Professional Image Generation & Editing using Google's Gen AI SDK.
Inspired by nano-banana-pro, supporting text-to-image and image-to-image.

Usage:
    python generate_image.py --prompt "description" --filename "out.png" --resolution 2K --count 2
    python generate_image.py --prompt "edit this" -i input.png --resolution 4K
"""

import argparse
import os
import sys
import datetime
import re
import io
from pathlib import Path

# Try to import the SDK
try:
    from google import genai
    from google.genai import types
    from PIL import Image
except ImportError:
    print("Error: 'google-genai' and 'Pillow' libraries are required.")
    print("Please install them using: pip install -U google-genai Pillow")
    sys.exit(1)

# Default configuration
DEFAULT_MODEL = "gemini-2.5-flash-image"
DEFAULT_RESOLUTION = "1K"
DEFAULT_ASPECT_RATIO = "wide"
DEFAULT_COUNT = 1

# Resolution Map
RESOLUTION_MAP = {
    "1K": "1:1",
    "2K": "1:1",
    "4K": "1:1"
}

# Aspect Ratio Map
ASPECT_RATIO_MAP = {
    "square": "1:1",
    "wide": "16:9",
    "portrait": "9:16",
    "landscape": "4:3",
    "tall": "3:4"
}

def slugify(text):
    """Simple slugify for filename generation."""
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')[:30]

def generate_filename(prompt, index=None, total=1):
    """Generates a timestamped descriptive filename: output_image_(d-m-Y)_(count).ext"""
    date_str = datetime.datetime.now().strftime("%d-%m-%Y")
    # count here refers to the index in batch, starting from 1 if total > 1
    count_suffix = f"_{index + 1}" if (total > 1 and index is not None) else "_1"
    return f"output_image_{date_str}{count_suffix}.png"

def save_image(img_bytes, output_path):
    """Converts bytes to RGB and saves as PNG using Pillow."""
    try:
        image = Image.open(io.BytesIO(img_bytes))
        # Ensure RGB mode for maximum compatibility
        if image.mode != 'RGB':
            image = image.convert('RGB')
        image.save(str(output_path), 'PNG')
        return True
    except Exception as e:
        print(f"Error saving image to {output_path}: {e}", file=sys.stderr)
        return False

def generate_image(prompt, api_key, model_name=DEFAULT_MODEL, resolution=DEFAULT_RESOLUTION, aspect_ratio=None, count=DEFAULT_COUNT, input_images=None, custom_filename=None):
    """
    Core generation logic supporting Gemini Native and Imagen flows.
    """
    client = genai.Client(api_key=api_key)
    final_aspect_ratio = ASPECT_RATIO_MAP.get(aspect_ratio, aspect_ratio) or RESOLUTION_MAP.get(resolution, "1:1")
    
    try:
        # 1. Gemini Native Flow (gemini-2.5-flash-image, etc.)
        if "gemini" in model_name.lower() and "image" in model_name.lower():
            print(f"Using Gemini Native Flow ({model_name})...")
            # Construct contents (text + optional images)
            contents = [prompt]
            if input_images:
                for img_path in input_images:
                    contents.append(Image.open(img_path))
            
            response = client.models.generate_content(
                model=model_name,
                contents=contents,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE"],
                    image_config=types.ImageConfig(aspect_ratio=final_aspect_ratio),
                ),
            )
            
            saved_paths = []
            parts = response.candidates[0].content.parts
            image_parts = [p for p in parts if p.inline_data]
            
            for i, part in enumerate(image_parts):
                fname = custom_filename if (len(image_parts) == 1 and custom_filename) else generate_filename(prompt, i, len(image_parts))
                if save_image(part.inline_data.data, fname):
                    abs_path = os.path.abspath(fname)
                    saved_paths.append(abs_path)
                    print(f"MEDIA: {abs_path}")
            
            return f"Success: {len(saved_paths)} image(s) generated via Gemini Native."

        # 2. Imagen Flow (imagen-3.0-*)
        else:
            print(f"Using Imagen Flow ({model_name})...")
            # Note: Standard Imagen 3.0 API usually takes a single prompt.
            # Multi-image editing might require specific model versions.
            config = types.GenerateImagesConfig(
                number_of_images=count,
                aspect_ratio=final_aspect_ratio
            )
            
            response = client.models.generate_images(
                model=model_name,
                prompt=prompt,
                config=config
            )

            saved_paths = []
            for i, gen_img in enumerate(response.generated_images):
                fname = custom_filename if (count == 1 and custom_filename) else generate_filename(prompt, i, count)
                if save_image(gen_img.image.image_bytes, fname):
                    abs_path = os.path.abspath(fname)
                    saved_paths.append(abs_path)
                    print(f"MEDIA: {abs_path}")
                
            return f"Success: {len(saved_paths)} image(s) generated via Imagen."

    except Exception as e:
        return f"Error: {str(e)}"

def main():
    parser = argparse.ArgumentParser(description="Professional Image Generation Tool (Pro Architecture)")
    parser.add_argument("--prompt", required=True, help="Image description or editing instructions")
    parser.add_argument("--api-key", help="Google AI API Key")
    parser.add_argument("--model", default=DEFAULT_MODEL, help=f"Model ID (e.g., gemini-3.1-flash-image-preview, gemini-3-pro-image-preview, imagen-3.0-generate-002). Default: {DEFAULT_MODEL}")
    parser.add_argument("--resolution", default=DEFAULT_RESOLUTION, choices=["1K", "2K", "4K"], help="Resolution (1K/2K/4K)")
    parser.add_argument("--aspect-ratio", default=DEFAULT_ASPECT_RATIO, help="Aspect ratio (e.g., wide, portrait, 16:9)")
    parser.add_argument("--count", type=int, default=DEFAULT_COUNT, help="Number of images to generate (1-4)")
    parser.add_argument("-i", "--input-image", action="append", help="Path to input image(s) for editing (up to 14)")
    parser.add_argument("--filename", help="Optional custom output filename")
    
    args = parser.parse_args()
    
    # API Key Priority: Argument > Environment
    api_key = args.api_key or os.environ.get("GOOGLE_API_KEY") or os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: API Key is required.", file=sys.stderr)
        sys.exit(1)
        
    print(f"Prompt: '{args.prompt}'")
    print(f"Config: model={args.model}, res={args.resolution}, count={args.count}")
    if args.input_image:
        print(f"Inputs: {len(args.input_image)} image(s)")
    
    result = generate_image(
        prompt=args.prompt,
        api_key=api_key,
        model_name=args.model,
        resolution=args.resolution,
        aspect_ratio=args.aspect_ratio,
        count=args.count,
        input_images=args.input_image,
        custom_filename=args.filename
    )
    print(result)

if __name__ == "__main__":
    main()
