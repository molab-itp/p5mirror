const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');

function init(my) {
  my.cl = {};
  my.cl.json_path = path.join(my.json_path, 'collections.json');
  my.cl.list_path = path.join(my.gen_path, 'collections.md');
  my.cl.collection_href = `https://editor.p5js.org/editor/${my.user_name}/collections`;
}

async function run(my) {
  init(my);

  if (!fs.pathExistsSync(my.cl.json_path) || my.href_read) {
    await read_href(my.cl.collection_href, my.cl.json_path);
  }
  let cols = fs.readJsonSync(my.cl.json_path);

  let lines = [];
  lines.push('# Collections for ' + my.user_name);
  lines.push(cols.length + ' collections  ');

  cols_as_links(my, cols, lines);

  cols.forEach((col) => cols_item_as_links(my, col, lines));

  fs.writeFileSync(my.cl.list_path, lines.join('\n'));
}

function cols_as_links(my, cols, lines) {
  cols.forEach((item) => {
    // console.log(index, 'project.name', item.project.name);
    // console.log(index, 'projectId', item.projectId);
    let name = item.name;
    let id = item.id;
    let updatedAt = item.updatedAt;
    updatedAt = `<!-- ${updatedAt} -->`;
    lines.push(`[${name}](https://editor.p5js.org/${my.user_name}/collections/${id})${updatedAt}  `);
  });
}

function cols_item_as_links(my, col, lines) {
  // console.log('col', col);
  lines.push('');
  lines.push('# ' + col.name);
  // console.log('# ' + col.name);
  let items = col.items;
  items = items.filter((item) => item.project && item.project.name);
  lines.push(items.length + ' sketches  ');
  // console.log(items.length + ' sketches  ');
  items.sort((item1, item2) => item1.project.name.localeCompare(item2.project.name));
  items.forEach((item) => {
    // console.log(index, 'project.name', item.project.name);
    // console.log(index, 'projectId', item.projectId);
    let name = item.project.name;
    let id = item.projectId;
    let updatedAt = item.updatedAt;
    updatedAt = `<!-- ${updatedAt} -->`;
    updatedAt = ''; // !!@ Disable
    lines.push(`[${name}](https://editor.p5js.org/${my.user_name}/sketches/${id})${updatedAt}  `);
  });
}

async function read_href(collection_href, json_path) {
  console.log('');
  console.time('collection read_href');
  try {
    const response = await axios.get(collection_href);
    const cols = response.data;
    console.log('collection n', cols.length);
    cols.sort((item1, item2) => item1.name.localeCompare(item2.name));
    fs.writeJsonSync(json_path, cols, { spaces: 2 });
  } catch (err) {
    console.log('collection read_href err', err);
  }
  console.timeEnd('collection read_href');
  console.log('');
}

// run();

// [Ex_05_99 Robot03_Response](https://editor.p5js.org/jht1493/sketches/sWEVGT4bm)

// https://www.sitepoint.com/understanding-module-exports-exports-node-js/
// exports.getName = getName;
// module.exports

module.exports.run = run;
