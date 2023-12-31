//
const fs = require('fs-extra');
const path = require('path');

const parse_argv = require('./parse_argv');
const { markDownQuote } = require('./markDownQuote');

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
  lines.push(`# ${my.user_name} p5projects`);
  lines.push('');
  for (let afile of dfiles) {
    let mfile = markDownQuote(afile);
    let efile = encodeURIComponent(afile);
    let id = extract_id(afile);
    // let mefile = markDownQuote(efile);
    // console.log('afile', afile);
    // console.log('mfile', mfile);
    // console.log('efile', efile);
    // console.log('mefile', mefile);
    // console.log('');
    // console.log('id', id);
    let p5js = `[p5js](https://editor.p5js.org/${my.user_name}/sketches/${id})`;
    lines.push(`- [${mfile}](./p5projects/${efile}) \[${p5js}\]`);
  }
  console.log('');

  fs.writeFileSync(my.p5projects_index_path, lines.join('\n'));
}

run();

function extract_id(link) {
  // substring(indexStart, indexEnd)
  return link.substring(link.length - 9);
}
