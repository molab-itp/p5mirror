# [p5mirror](https://github.com/molab-itp/p5mirror)

## How ? Quick start

```
# Terminal commands to get started

# Install nodejs
open https://nodejs.org/en/download

# Fork this repo and name it p5mirror-p5name
# where p5name is our editor.p5js user name
# run this bash script in the root of your repo

bin/mirror.sh --user p5name

# and then commit changes in github desktop

```

## Your mirror here

```
# Edit this line for your editor.p5js user name
bin/mirror.sh --user p5name

```

## Why ?

mirror your editor.p5js sketches into a git repo

- Where are my editor.p5js sketches and collections ?
  - make sure that all your editor.p5js projects are available in a git repo
  - be prepared if editor.p5js server fails
- How ?
  - command line scripts download your p5 sketches with associated media files
  - mark down files generated to list sketches and collections
  - index file generated for your projects for github pages

## Listing of editor.p5js projects

Generated listing of editor.p5js projects

- [p5projects-index](./p5projects-index.md)

## p5mirror/forks

[p5mirror/forks](https://github.com/molab-itp/p5mirror/forks?include=active%2Cnetwork&page=1&period=2y&sort_by=last_updated)

## Required apps

- https://nodejs.org/en/download

### For Microsoft Windows OS

- these scripts require bash shell
- test on macos
- for Windows try:
  - [how-do-i-use-bash-on-windows](https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal)

## Recommended apps

- https://code.visualstudio.com/

- https://desktop.github.com/

## VS Code extensions

- https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode

- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

## Usage

```

# p5name is the place holder for your editor.p5js user name

# fork this repo and name it p5mirror-p5name

# in p5mirror-p5name folder, run bin/mirror.sh to
# download p5js scripts for a user account
#   and create markdown listing files
#   only projects updated since last mirror are downloaded
#
bin/mirror.sh --user p5name

# full update, download all projects
#
bin/mirror.sh --user p5name --full

# run in verbose mode to show details of steps for debugging
#
bin/mirror.sh --user p5name --verbose

# remove sketches not present online
#
bin/mirror.sh --user p5name --clean

```

## mirror script details

- See bin/mirror.sh for details steps
- These steps can be run independantly

## Generated files

All generated files are stored in the downloads directory

- [downloads/gen/sketches_recent.md](./downloads/gen/sketches_recent.md)
- [downloads/gen/sketches.md](./downloads/gen/sketches.md)
- [downloads/gen/collections.md](./downloads/gen/collections.md)

### Shell scripts to download and unzip

- [downloads/gen/download.sh](./downloads/gen/download.sh)
- [downloads/gen/unzip.sh](./downloads/gen/unzip.sh)

### JSON source from editor.p5js

- [downloads/json/collections.json](./downloads/json/collections.json)
- [downloads/json/sketches.json](./downloads/json/sketches.json)

<!-- ## search p5mirror on github for other repos -->
<!-- [https://github.com/search?q=p5mirror&type=repositories](https://github.com/search?q=p5mirror&type=repositories) -->

<!-- ## github pages setup

replace your-github in this link

- [github pages p5projects-index](https://your-github.github.io/p5mirror-your-github/p5projects-index.html)
 -->
