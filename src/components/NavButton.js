import React from "react";
import PropTypes from 'prop-types';

export default class NavButton extends React.Component {

  render() {
    return (
      <button className={'btn btn-default'}
              onClick={() => this.props.store.dispatch(this.props.action())}>
        {this.props.name}
      </button>
    );
  }
}

NavButton.propTypes = {
  store: PropTypes.object.isRequired,
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};