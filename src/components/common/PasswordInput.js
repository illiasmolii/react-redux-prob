import React from "react";
import PropTypes from 'prop-types';

export default class PasswordInput extends React.Component {

  render() {
    return (
      <div className={'form-group'}>
        <label className={'control-label'}>
          Password
          <input type={'password'}
                 name={'password'}
                 className={'form-control'}
                 onChange={this.props.handleChange}/>
        </label>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  handleChange: PropTypes.func.isRequired
};