function markDownQuote(str) {
  return str.replace(/([\`\*\_\{\}\[\]\<\>\#\+\-\.\!\|])/g, '\\$1');
}
module.exports.markDownQuote = markDownQuote;
