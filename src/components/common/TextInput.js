import React from "react";
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {

  render() {
    return (
      <div className={'form-group'}>
        <label className={'control-label'}>
          {this.props.label}
          <input type={'text'}
                 name={this.props.name}
                 className={'form-control'}
                 onChange={this.props.onchange}/>
        </label>
      </div>
    );
  }
}

TextInput.propTypes = {

};