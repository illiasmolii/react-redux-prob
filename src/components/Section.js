import React from "react";

export default class Section extends React.Component {

  render() {
    return (
      <button>{this.props.name}</button>
    );
  }
}