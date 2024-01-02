cd "../p5mirror/downloads/../p5projects"
pwd
#
echo unzip 1 "background 0-NAReIkM1c"
rm -rf "background 0-NAReIkM1c"
mkdir "background 0-NAReIkM1c"
cd "background 0-NAReIkM1c"
unzip -q "../../downloads/zips/background 0-NAReIkM1c"
cd ..
cd ..
# remove redundant p5.js p5.sound.min.js
rm -f p5projects/*/p5.*
echo