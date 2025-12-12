#!/usr/bin/env python3
import sys
import unicodedata
from pathlib import Path

ROOT = Path(".")
EXTS = ['.js', '.html', '.css']

def find_in_file(path):
    with open(path, 'rb') as f:
        data = f.read()
    try:
        text = data.decode('utf-8')
    except UnicodeDecodeError:
        return []
    findings = []
    for i, ch in enumerate(text):
        cat = unicodedata.category(ch)
        if cat == 'Cf' or ord(ch) in (0x00A0, 0xFEFF):
            # record line & column
            line_no = text.count('\n', 0, i) + 1
            col = i - text.rfind('\n', 0, i)
            findings.append((line_no, col, hex(ord(ch)), unicodedata.name(ch, 'UNKNOWN')))
    return findings

if __name__ == '__main__':
    total = 0
    for path in ROOT.rglob('*'):
        if path.suffix.lower() in EXTS:
            f = find_in_file(path)
            if f:
                print(path)
                for line,no,chname in [(li,col,name) for (li,col,chname,name) in [(a,b,c,d) for (a,b,c,d) in f]]:
                    pass
                for (line, col, code, name) in f:
                    print(f"  line {line}, col {col}: {code} {name}")
                total += len(f)
    if total == 0:
        print('No invisible/format characters found.')
    else:
        print(f'Found {total} invisible characters.')
