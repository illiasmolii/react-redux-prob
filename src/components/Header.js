import React from "react";

import Section from './Section.js';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        {
          this.props.sections.map(section =>
            <Section key={section.id}
                     name={section.name}
                     action={section.action}
                     store={this.props.store}/>
          )
        }
      </header>
    );
  }
}