#!/usr/bin/env bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "main" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the main! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd dist/ngx-videogular-showroom

git init
git config user.name "Jaime Oliveira"
git config user.email "jaime.amo18@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/videogular/ngx-videogular-showroom.git"
git fetch upstream
git reset upstream/gh-pages

touch .

git add -A .
git commit -m "ci(GH-Pages): Rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
