import React from 'react';

class ArticleRow extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    console.log("clickin a row");
    this.props.onClick(this.props.id);
  };
  render() {
    return (
      <div className="article-row link" onClick={this.handleClick}>
        <div className="article-title">{this.props.author}</div>
        <div className="article-date">{this.props.pub_date}</div>
      </div>
    );
  }
}

export default ArticleRow;
