import React from 'react';
import CrossButton from './CrossButton';

class NewArticleForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addArticle({
      title: this.titleInput.value,
      author: {
        firstName: this.authorFirstNameInput.value,
        lastName: this.authorLastNameInput.value,
        website: this.authorWebsiteInput.value,
      },
      body: this.bodyInput.value,
    });
  }

  handleCloseForm = (event) => {
    this.props.cancelForm();
  }

  render() {
    return (
      <div id="new-article-form">
      {
        this.props.isBad ?
        <div class="alert alert-danger" role="alert"><strong>Warning!</strong>What are you trying to submit 😠</div>:
          <h3>New Article</h3>
      }
        <CrossButton onClick={this.handleCloseForm}/>

        <form onSubmit={this.handleSubmit}>
          <input
            ref={(input) => this.titleInput = input}
            className="form-control"
            placeholder="Article Title" />
          <br />
          <input
            ref={(input) => this.authorFirstNameInput = input}
            className="form-control"
            placeholder="Author First Name" />
          <br />
          <input
            ref={(input) => this.authorLastNameInput = input}
            className="form-control"
            placeholder="Author Last Name" />
          <br />
          <input
            ref={(input) => this.authorWebsiteInput = input}
            className="form-control"
            placeholder="Author Website" />
          <br />
          <textarea
            ref={(input) => this.bodyInput = input}
            className="form-control"
            rows="20"
            placeholder="Article Body"></textarea>
          <br />
          <div className="g-recaptcha" data-sitekey="6LdNZyAUAAAAAHvG9_bC5QwRHKwG6Wn0Q1PprMrI"></div>
          <button type="submit" className="btn btn-secondary">
            Add Article
          </button>
        </form>
      </div>
    );
  }
}

export default NewArticleForm;
