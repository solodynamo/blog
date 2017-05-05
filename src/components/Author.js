import React from 'react';

class Author extends React.Component {
  render() {
    return (
      <div className="article-author">
        By: <a href={this.props.website}>{this.props.author}</a>
      </div>
    );
  }
}

export default Author;
