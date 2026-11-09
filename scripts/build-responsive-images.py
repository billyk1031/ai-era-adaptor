#!/usr/bin/env python3
"""Encode checked-in responsive WebP variants for the static GitHub Pages site.

Requires Google's cwebp CLI. Originals remain untouched for source fidelity and
existing social-image URLs. Run from any directory after changing a source image.
"""
import json
from pathlib import Path
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[1]
ASSETS = {
    'personas': {'file': 'personas.png', 'width': 1594, 'height': 986,
                 'widths': [480, 800, 1200, 1594], 'fallbackWidth': 1200, 'quality': 88},
    'cover': {'file': 'cover.png', 'width': 1600, 'height': 2560,
              'widths': [320, 480, 640, 960], 'fallbackWidth': 640, 'quality': 92},
    'book-hero': {'file': 'book-hero.png', 'width': 2169, 'height': 725,
                  'widths': [800, 1200, 1600, 2169], 'fallbackWidth': 1600, 'quality': 88},
    'workbook': {'file': 'workbook.png', 'width': 1600, 'height': 983,
                 'widths': [640, 960, 1280, 1600], 'fallbackWidth': 1280, 'quality': 92},
}


def main():
    encoder = shutil.which('cwebp')
    if encoder is None:
        raise SystemExit('Google cwebp is required; no image encoder was installed automatically.')
    output = ROOT / 'public' / 'responsive'
    output.mkdir(exist_ok=True)
    manifest = {}
    for name, config in ASSETS.items():
        source = ROOT / 'public' / config['file']
        for width in config['widths']:
            target = output / f'{name}-{width}.webp'
            subprocess.run([encoder, '-quiet', '-q', str(config['quality']), '-m', '6',
                            '-sharp_yuv', '-metadata', 'icc', '-resize', str(width), '0',
                            str(source), '-o', str(target)], check=True)
            print(f'{target.relative_to(ROOT)}: {target.stat().st_size:,} bytes')
        manifest[name] = {key: config[key] for key in ['width', 'height', 'widths', 'fallbackWidth']}
    (ROOT / 'app' / 'lib' / 'responsive-images.json').write_text(json.dumps(manifest, indent=2) + '\n')


if __name__ == '__main__':
    main()
