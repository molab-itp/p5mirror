#!/bin/bash
cd ${0%/*}

# Produce a release build
#   increment build number
#   put to public repo
#   publish to html site

cd ..

bin/build.sh --prod
# bin/to-public.sh
bin/pub-html.sh

