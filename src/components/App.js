import React from 'react';

import ArticleList from './ArticleList';
import Article from './Article';
import NewArticleForm from './NewArticleForm';

// import * as api from '../api';
import Api from '../container';

class App extends React.Component {

  state = {
    data: {
      articles: [],
      currentArticle: {}
    },
    newArticleForm: false
  };

  componentDidMount() {
    debugger;
    this.getArticle();
  }

  getArticle() {
    Api.api.getArticleList().then(articleList => {
      debugger;
      console.log(articleList);
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          articles: articleList[0]
        },
      }));
    });
    console.log(this.state);
  }

  cancelFormSubmission = (event) => {
    this.setState({ newArticleForm: false });
  }

  setCurrentArticle = (articleId) => {
    api.getArticle(articleId).then(article => {
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          currentArticle: article
        },
        newArticleForm: false
      }));
    });
  }

  showNewArticleForm = (event) => {
    event.preventDefault();
    this.setState({ newArticleForm: true });
  }

  addArticle = (articleInput) => {
    Api.api.addArticle(articleInput).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="App">
        <h2 id="header">Solodynamo says...</h2>

        <div id="left">
          <h3>Article List</h3>
          <ArticleList
            articles={this.state.data.articles}
            onArticleClick={this.setCurrentArticle}
          />

          <button id="new-article" className="btn btn-secondary" type="button" onClick={this.showNewArticleForm}>
            New Article
          </button>
        </div>

        <div id="right">
          {
            this.state.newArticleForm ?
              <NewArticleForm addArticle={this.addArticle} cancelForm= {this.cancelFormSubmission}/> :
              <Article {...this.state.data.currentArticle} />

          }
        </div>

      </div>
    );
  }
}

export default App;
