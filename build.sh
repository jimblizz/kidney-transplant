#!/bin/sh
# Builds dist/ for Cloudflare. site/index.html is a body fragment (the claude.ai Artifact
# publisher supplies the document shell), so wrap it in a full document here.
# Only index.html and content.js are published — never check.mjs or .forbidden.
set -e
node site/check.mjs
rm -rf dist && mkdir dist
cp site/content.js dist/
{
  printf '<!doctype html>\n<html lang="en-GB">\n<head>\n<meta charset="utf-8">\n'
  printf '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
  cat site/index.html
  printf '\n</html>\n'
} > dist/index.html
