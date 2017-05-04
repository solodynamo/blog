var axios = require('axios');
var container = require('./api');
var moment = require('moment');
var Base64 = require('./encoding');


function getArticleList() {
var arr = [];
return axios({
  method:'get',
  url:'https://gentle-atoll-86567.herokuapp.com/api/starships',
  responseType:'json'
})
  .then(function(response) {
    arr.push(response.data.data);
    return arr;
});

}

function addArticle (articleInfo) {
  var obj = {
    author: articleInfo.author.firstName +' '+ articleInfo.author.lastName,
    arid: Math.floor((Math.random() * 100) + 1),
    content: articleInfo.title+":- "+articleInfo.body,
    pub_date: moment().format('MMMM Do YYYY, h:mm:ss a')
  }
  console.log(obj);
  return axios({
    method:'post',
    url:'https://gentle-atoll-86567.herokuapp.com/api/starships',
    data: obj
  })
    .then(function(response) {
      return response;
  });


};

exports.api = {
  getArticleList: getArticleList,
  addArticle: addArticle

}
