import React from 'react';

import ArticleList from './ArticleList';
import Article from './Article';
import NewArticleForm from './NewArticleForm';

// import * as api from '../api';
import Api from '../container';
import transform from '../utilities/objectGenerator';

class App extends React.Component {

  state = {
    data: {
      articles: [],
      currentArticle: {}
    },
    newArticleForm: false
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle() {
    Api.api.getArticleList().then(articleList => {
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

  setCurrentArticle = (article) => {

      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          currentArticle: article
        },
        newArticleForm: false
      }));
  }

  showNewArticleForm = (event) => {
    event.preventDefault();
    this.setState({ newArticleForm: true });
  }

  addArticle = (articleInput) => {
    let newArticle = transform(articleInput);
    Api.api.addArticle(articleInput).then(res => {
      console.log(res);
    });
    this.setState((prevState) => ({
        data: {
          articles: [...prevState.data.articles, newArticle],
          currentArticle: newArticle,
        },
        newArticleForm: false,
      }));
  }

  render() {
    return (
      <div className="App">
        <h2 id="header">Solodynamo says...</h2>

        <div id="left">
          <h2>Article List</h2>
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
