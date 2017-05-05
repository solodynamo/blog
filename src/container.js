var axios = require('axios');
var container = require('./api');
var moment = require('moment');
var hash = require('randomstring');


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
    arid: hash.generate(10),
    title: articleInfo.title,
    content: articleInfo.body,
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
