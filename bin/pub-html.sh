#!/bin/bash
cd ${0%/*}

# Publish html app to jht1493.net

# external/media
#   is managed manually
# excludes="--exclude .DS_Store --exclude .git --exclude node_modules --exclude external/media --exclude external/media-1"
# excludes="--exclude .DS_Store --exclude .git --exclude node_modules "
excludes="--exclude-from to-public-exclude.txt"

delete=--delete
test=
verbose=
# test=--dry-run
# verbose=v

start_time=`date +%s`

host=jhtitp@jht1493.net
siteroot=/home/bitnami/htdocs
homepage=p5moLibrary/demo
rpath="${siteroot}/${homepage}"
rdest=$host:${rpath}

# Create directory for upload
ssh $host mkdir -p $rpath

source=../docs
# echo $verbose $delete $test
echo -razO$verbose $excludes $delete $test
echo "rsync from $source"
echo "        to $rdest"
rsync -razO$verbose $excludes $delete $test "$source/" "$rdest/"

echo
echo Lapse $(expr `date +%s` - $start_time) 
echo build_ver `cat ../src/gen/build_ver.txt`
echo "open https://jht1493.net/${homepage}"


