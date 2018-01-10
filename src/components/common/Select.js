import React from "react";
import PropTypes from 'prop-types';

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

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })).isRequired
};