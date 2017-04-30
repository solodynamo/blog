import React from "react";


class CrossButton extends React.Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick();
  };

  render() {
    return (<span className="cross-btn" onClick={this.handleClick}>X</span>);
  }


}

export default CrossButton;
