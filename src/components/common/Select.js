import React from "react";

export default class Select extends React.Component {

  render() {
    return (
      <div className={'form-group'}>
        <label className={'control-label'}>
          {this.props.label}
          <select name={this.props.name}
                  className={'form-control'}
                  onChange={this.props.onchange}>
            {
              this.props.options.map(opt =>
                <option key={opt.value} value={opt.value}>{opt.name}</option>
              )
            }
          </select>
        </label>
      </div>
    );
  }
}