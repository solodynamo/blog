var axios = require('axios');
var container = require('./api');
var transform = require('./utilities/objectGenerator');
var isProfane = require('./utilities/objectValidator');


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
  var obj = transform(articleInfo);
  if(isProfane(obj)) {
    console.log(obj);
    return axios({
      method:'post',
      url:'https://gentle-atoll-86567.herokuapp.com/api/starships',
      data: obj
    })
      .then(function(response) {
        return response;
    });
  } else {
    console.log("something bad");
  }
};

exports.api = {
  getArticleList: getArticleList,
  addArticle: addArticle
}
