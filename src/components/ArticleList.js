import React from 'react';

import ArticleRow from './ArticleRow';

class ArticleList extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { articles, onArticleClick } = this.props;
    console.log(onArticleClick);
    return (
      <div className="article-list">
        {articles.map(article =>
          <ArticleRow
            onClick={onArticleClick}
            key={article.id}
            {...article}
          />
        )}
      </div>
    );
  }
}

export default ArticleList;
