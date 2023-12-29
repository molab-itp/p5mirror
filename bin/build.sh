#!/bin/bash
cd ${0%/*}

# Install npm if needed for node build scripts
#
dest=../node
if [ ! -e "$dest/node_modules" ]; then
  pushd $dest > /dev/null
  npm install
  popd > /dev/null
fi

node ../node/build.js "$@"

