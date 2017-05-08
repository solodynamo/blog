var isBad = require('swearjar');


function isProfane(articleObj) {
  let {arid, author, content, pub_date, title} = articleObj;
  let flag = true;
  console.log("ksfklsjflksjflkj")
  console.log(arid, author);

  if(arid === '' || isBad.profane(arid)) {
    flag = false;
  }
  if(author === '' || isBad.profane(author)) {
    flag = false;
  }
  if(content === '' || isBad.profane(content)) {
    flag = false;
  }
  if(pub_date === '' || isBad.profane(pub_date)) {
    flag = false;
  }
  if(title ==='' || isBad.profane(title)) {
    flag = false;
  }

  return flag;
}

module.exports = exports = isProfane;
