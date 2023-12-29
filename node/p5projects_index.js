//
const fs = require('fs-extra');
const path = require('path');

const parse_argv = require('./parse_argv');

let my = {};
parse_argv.init(my);

function init() {
  // my.p5projects_path = path.join(my.root_path, '../p5projects');
  // console.log('p5projects_index ', my.p5projects_path);
  my.p5projects_index_path = path.join(my.p5projects_path, '../p5projects-index.md');
}

function run() {
  //
  init();

  if (
    !fs.pathExistsSync(my.p5projects_path) || //
    !fs.lstatSync(my.p5projects_path).isDirectory()
  ) {
    console.log('no folder', my.p5projects_path);
    return;
  }

  let dfiles = fs.readdirSync(my.p5projects_path);
  // console.log('dfiles', dfiles);
  console.log('dfiles n', dfiles.length);
  let lines = [];
  for (let afile of dfiles) {
    // console.log('afile', afile);
    let efile = encodeURIComponent(afile);
    lines.push(`[${afile}](./p5projects/${efile}/index.html)`);
  }
  console.log('');

  fs.writeFileSync(my.p5projects_index_path, lines.join('\n'));
}

run();
