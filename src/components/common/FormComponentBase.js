import React from "react";

// TODO replace by component composition
export default class FormComponentBase extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
}