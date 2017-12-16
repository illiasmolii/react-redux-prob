import React from "react";

export default class PasswordInput extends React.Component {

  render() {
    return (
      <div className={'form-group'}>
        <label className={'control-label'}>
          Password
          <input type={'password'}
                 name={'password'}
                 className={'form-control'}
                 onChange={this.props.onchange}/>
        </label>
      </div>
    );
  }
}