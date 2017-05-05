import React from 'react';

import Author from './Author';

class Article extends React.Component {
  render() {
    if (!this.props.author) {
      return <h3>Select an Article</h3>;
    }
    return (
      <div id="current-article">
        <h3>{this.props.title}</h3>
        <div className="article-date">
          {this.props.pub_date}
        </div>
        <Author {...this.props} />
        <div className="article-body">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Article;
