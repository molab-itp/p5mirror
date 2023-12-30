const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

const collection_list = require('./collection_list');
const parse_argv = require('./parse_argv');
const { markDownQuote } = require('./markDownQuote');

let my = {};
parse_argv.init(my);

function init() {
  my.gen_path = path.join(my.root_path, 'gen');
  my.zips_path = path.join(my.root_path, 'zips');
  my.json_path = path.join(my.root_path, 'json');

  fs.ensureDirSync(my.gen_path);
  fs.ensureDirSync(my.zips_path);
  fs.ensureDirSync(my.json_path);
  fs.ensureDirSync(my.p5projects_path);

  my.sketch_json_path = path.join(my.json_path, 'sketches.json');

  my.list_path = path.join(my.gen_path, 'sketches.md');
  my.list_recent_path = path.join(my.gen_path, 'sketches_recent.md');
  my.download_sh_path = path.join(my.gen_path, 'download.sh');
  my.unzip_sh_path = path.join(my.gen_path, 'unzip.sh');

  my.sketch_href = `https://editor.p5js.org/editor/${my.user_name}/projects`;

  // =1 to force updating of sketches.json
  my.href_read = 1;
}

async function run() {
  //
  init();

  await collection_list.run(my);

  if (!fs.pathExistsSync(my.sketch_json_path) || my.href_read) {
    await read_href(my.sketch_href, my.sketch_json_path);
  }
  let sks = fs.readJsonSync(my.sketch_json_path);

  // sort by name
  // let options =  { sensitivity: 'case', caseFirst: 'lower' };
  // attempts at case-sensitive fail
  let options = { sensitivity: 'case' };
  sks.sort((item1, item2) => item1.name.localeCompare(item2.name, 'en', options));

  list_sketches(sks, my.list_path);

  // sort by updatedAt
  sks.sort((item1, item2) => item1.updatedAt.localeCompare(item2.updatedAt));
  sks.reverse();
  list_sketches(sks, my.list_recent_path);

  // create the download scripts in updateAt order
  // gives user a chance to prune script to only update recent changes
  //
  download_sh(sks, my.download_sh_path, my.unzip_sh_path);

  console.log('');
}

function list_sketches(sks, list_path) {
  // console.log('sks', sks);
  // console.log('sks.length', sks.length);
  let lines = [];
  lines.push('# Sketches for ' + my.user_name);
  lines.push([`${sks.length} sketches  `]);
  sks.forEach((item) => {
    // console.log(index, 'project.name', item.project.name);
    // console.log(index, 'projectId', item.projectId);
    let name = item.name;
    let id = item.id;
    let updatedAt = item.updatedAt;
    let mname = markDownQuote(name);
    let mid = markDownQuote(id);
    lines.push(`[${mname}](https://editor.p5js.org/${my.user_name}/sketches/${mid})<!-- ${updatedAt} -->  `);
  });
  fs.writeFileSync(list_path, lines.join('\n'));
}

function download_sh(sks, download_sh_path, unzip_sh_path) {
  // console.log('sks', sks);
  // console.log('sks.length', sks.length);
  let download_lines = [];
  let unzip_lines = [];
  unzip_lines.push(`cd "${my.downloads}/../p5projects"`);
  unzip_lines.push(`pwd`);
  let index = 0;
  sks.forEach((item) => {
    // console.log(index, 'project.name', item.project.name);
    // console.log(index, 'projectId', item.projectId);
    index++;
    if (my.limit > 0 && index > my.limit) return;
    let id = item.id;
    let name = fixForFileName(item.name + '-' + id);
    download_lines.push(`echo download ${index} "${name}"`);
    download_lines.push(
      `curl -s https://editor.p5js.org/editor/projects/${id}/zip -o "${my.downloads}/zips/${name}.zip"`
    );
    unzip_sh(unzip_lines, index, name);
  });
  download_lines.push('echo');
  unzip_lines.push(`cd ..`);
  unzip_lines.push(`# remove redundant p5.js p5.sound.min.js`);
  unzip_lines.push(`rm -f p5projects/*/p5.*`);
  unzip_lines.push('echo');
  fs.writeFileSync(download_sh_path, download_lines.join('\n'));
  fs.writeFileSync(unzip_sh_path, unzip_lines.join('\n'));
}

function unzip_sh(unzip_lines, index, name) {
  unzip_lines.push(`#`);
  unzip_lines.push(`echo unzip ${index} "${name}"`);
  // unzip_lines.push(`# ${name}`);
  unzip_lines.push(`rm -rf "${name}"`);
  unzip_lines.push(`mkdir "${name}"`);
  unzip_lines.push(`cd "${name}"`);
  unzip_lines.push(`unzip -q "../../downloads/zips/${name}"`);
  unzip_lines.push(`cd ..`);
}

// Keep track of duplicate names to suffix with count
let counts = {};

function fixForFileName(str) {
  // Map chars not happy in file name to ''
  str = str.replace(/[\/\\:*?"<>\{\}]/g, '');
  // compress multiple consecutive - or space to single
  str = str.replace(/\-+/g, '-');
  str = str.replace(/ +/g, ' ');
  let count = counts[str];
  if (!count) {
    counts[str] = 1;
    return str;
  }
  let nstr = str + '-' + count;
  counts[str] = count + 1;
  return nstr;
}

// cd ..
// # remove redundant p5.js p5.sound.min.js
// rm p5projects/*/p5.*

// cd p5projects
// rm -r "my sketch name"
// mkdir "my sketch name"
// cd "my sketch name"
// unzip "../../downloads/zips/my sketch name.zip"
// cd ..
//

async function read_href(sketch_href, json_path) {
  // console.log('');
  console.time('sketch read_href');
  try {
    const response = await axios.get(sketch_href);
    const sks = response.data;
    console.log('sketch n', sks.length);
    sks.sort((item1, item2) => item1.name.localeCompare(item2.name));
    fs.writeJsonSync(json_path, sks, { spaces: 2 });
  } catch (err) {
    console.log('read_href err', err);
  }
  console.timeEnd('sketch read_href');
  console.log('');
}

// console.log('run start');
run();
// console.log('run end');

//     "updatedAt": "2021-03-21T20:48:04.012Z",
// [Ex_05_99 Robot03_Response](https://editor.p5js.org/jht1493/sketches/sWEVGT4bm)

// https://github.com/jprichardson/node-fs-extra

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
