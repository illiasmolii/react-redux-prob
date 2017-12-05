import React from "react";

export default class Select extends React.Component {

  render() {
    return (
      <label>
        {this.props.label}
        <select>
          {
            this.props.options.map(opt =>
              <option key={opt.value} value={opt.value}>{opt.name}</option>
            )
          }
        </select>
      </label>
    );
  }
}