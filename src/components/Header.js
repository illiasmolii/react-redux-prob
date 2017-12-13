import React from "react";

import NavButton from './NavButton.js';

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
      </header>
    );
  }
}