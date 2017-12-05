import React from "react";

import Header from './components/Header.js';
import Select from './components/Select.js';

export class App extends React.Component {

  render() {
    return (
      <div>
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
        <form>
          <Select options={
            [
              {
                value: 1,
                name: 'first'
              },
              {
                value: 2,
                name: 'second'
              },
              {
                value: 3,
                name: 'third'
              }
            ]
          }/>
        </form>
      </div>
    );
  }
}