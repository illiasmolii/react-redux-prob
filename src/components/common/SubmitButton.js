import React from "react";

export default class SubmitButton extends React.Component {

  render() {
    return (
      <input type={'button'}
             onClick={this.props.onclick}
             value={this.props.text} className={'btn btn-primary'}/>
    );
  }
}