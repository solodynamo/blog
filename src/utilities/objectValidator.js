var isBad = require('swearjar');


function isProfane(articleObj) {
  let {arid, author, content, pub_date, title} = articleObj;
  let flag = true;
  console.log(arid, author);

  if(isBad.profane(arid)) {
    flag = false;
  }
  if(isBad.profane(author)) {
    flag = false;
  }
  if(isBad.profane(content)) {
    flag = false;
  }
  if(isBad.profane(pub_date)) {
    flag = false;
  }
  if(isBad.profane(title)) {
    flag = false;
  }

  return flag;
}

module.exports = exports = isProfane;
