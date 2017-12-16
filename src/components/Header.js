import React from "react";

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