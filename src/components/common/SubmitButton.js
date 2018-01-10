import React from "react";
import PropTypes from 'prop-types';

export default class SubmitButton extends React.Component {

  render() {
    return (
      <input type={'button'}
             onClick={this.props.onclick}
             value={this.props.text} className={'btn btn-primary'}/>
    );
  }
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired
};