import React from "react";
import PropTypes from 'prop-types';

import NavButton from './NavButton.js';
import { logout } from "../state/actions/auth";

export default class Header extends React.Component {

  render() {
    return (
      <header className={'row'}>
        {
          this.props.sections.map(section =>
            <NavButton key={section.id}
                     name={section.name}
                     action={section.action}
                     store={this.props.store}/>
          )
        }
        <button className={'btn btn-danger'}
                onClick={() => this.props.store.dispatch(logout())}>
          Logout
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    action: PropTypes.func
  })).isRequired
};