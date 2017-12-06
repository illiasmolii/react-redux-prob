import React from "react";

import Header from './components/Header.js';
import MyPayments from "./components/tabs/my-payments/MyPayments";

export class App extends React.Component {

  render() {
    return (
      <div>
        <Header sections={
          [
            {
              id: 1,
              name: 'My Payments'
            },
            {
              id: 2,
              name: 'Internal'
            },
            {
              id: 3,
              name: 'International'
            }
          ]
        }/>
        <MyPayments payments={
          [
            {
              id: 1,
              recipient: 'John Doe',
              date: new Date(2017, 9, 25),
              currency: 'USD',
              amount: 100
            },
            {
              id: 2,
              recipient: 'Jane Doe',
              date: new Date(2017, 10, 1),
              currency: 'USD',
              amount: 200
            }
          ]
        }/>
      </div>
    );
  }
}