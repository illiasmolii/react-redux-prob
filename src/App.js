import React from "react";

import Header from './components/Header.js';

export class App extends React.Component {

  render() {
    return (
      <Header sections={
        [
          {
            id: 1,
            name: 'First'
          },
          {
            id: 2,
            name: 'Second'
          },
          {
            id: 3,
            name: 'Third'
          }
        ]
      }/>
    );
  }
}