import React from "react";

import Header from './components/Header.js';
import MyPayments from "./components/tabs/my-payments/MyPayments";
import {
  pages, showExternal, showInternal, showMyPayments
} from "./state/actions/navigation";

export class App extends React.Component {

  navigation() {
    switch (this.props.store.getState().navigation.page) {

      case (pages.INTERNAL):
        return <h1>Internal payment form will be here</h1>;

      case (pages.EXTERNAL):
        return <h1>External payment form will be here</h1>;

      default:
        return <MyPayments payments={
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
        }/>;
    }
  }

  render() {
    let currentPage = this.navigation();

    return (
      <div>
        <Header store={this.props.store} sections={
          [
            {
              id: 1,
              name: 'My Payments',
              action: showMyPayments
            },
            {
              id: 2,
              name: 'Internal',
              action: showInternal
            },
            {
              id: 3,
              name: 'External',
              action: showExternal
            }
          ]
        }/>
        { currentPage }
      </div>
    );
  }
}