import React from "react";

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