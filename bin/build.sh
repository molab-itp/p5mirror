#!/bin/bash
cd ${0%/*}
cd ..

# check for destination p5mirrorLib
dest=p5mirrorLib
if [ ! -e "$dest" ]; then
  git clone  --depth 1 https://github.com/molab-itp/$dest.git $dest
fi
if [ ! -e "$dest" ]; then
  echo "fail to clone to $dest"
  exit
fi
# Bring p5mirrorLib up to date
pushd "$dest" > /dev/null
git pull --quiet
# git pull 
# git status
popd > /dev/null

p5mirrorLib/bin/build.sh  "$@"


