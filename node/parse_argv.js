//
const path = require('path');

function init(my) {
  my.user_name = user_name = process.env.USER_NAME || 'jhtitp';
  my.downloads = 'downloads';
  my.limit = -1;

  for (let index = 0; index < process.argv.length; index++) {
    // console.log(index, process.argv[index]);
    let val = process.argv[index];
    if (val == '--user') {
      index++;
      my.user_name = process.argv[index];
      console.log('argv user_name', my.user_name);
    } else if (val == '--downloads') {
      index++;
      my.downloads = process.argv[index];
      console.log('argv downloads', my.downloads);
    } else if (val == '--limit') {
      index++;
      my.limit = parseFloat(process.argv[index]);
      console.log('argv limit', my.limit);
    }
  }

  my.root_path = path.join(__dirname, '..', my.downloads);
  console.log('');
  console.log('my.root_path', my.root_path);

  my.p5projects_path = path.join(my.root_path, '../p5projects');
}

module.exports.init = init;
