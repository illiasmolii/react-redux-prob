import React from "react";

export default class Section extends React.Component {

  render() {
    return (
      <button onClick={() => this.props.store.dispatch(this.props.action())}>
        {this.props.name}
      </button>
    );
  }
}