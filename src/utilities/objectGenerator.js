var hash = require('randomstring');
var moment = require('moment');

function objTransform (articleInfo) {
  var obj = {
    author: articleInfo.author.firstName +' '+ articleInfo.author.lastName,
    arid: hash.generate(10),
    title: articleInfo.title,
    content: articleInfo.body,
    pub_date: moment().format('MMMM Do YYYY, h:mm:ss a')
  }
  return obj;
}

module.exports = exports = objTransform;
