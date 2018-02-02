import React from "react";
import PropTypes from 'prop-types';

import NavButton from './NavButton.js';

export default class Header extends React.Component {

  render() {
    return (
      <header className={'row'}>
        <NavButton name='Balance'
                   action={this.props.balance} />
        <NavButton name='My Payments'
                   action={this.props.myPayments} />
        <NavButton name='Internal'
                   action={this.props.internal} />
        <NavButton name='External'
                   action={this.props.external} />
        <button className={'btn btn-danger'}
                onClick={() => this.props.logout()}>
          Logout
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  balance: PropTypes.func.isRequired,
  myPayments: PropTypes.func.isRequired,
  internal: PropTypes.func.isRequired,
  external: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};