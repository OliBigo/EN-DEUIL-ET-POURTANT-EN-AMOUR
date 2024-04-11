#!/usr/bin/env sh

set -e

npm ci

npm run build

cd dist

git init
git add -A
git commit -m "deploy"
git push -f 