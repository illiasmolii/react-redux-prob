import React from "react";

import Header from './components/Header.js';
import {
  pages, showBalance, showExternal, showInternal, showMyPayments
} from "./state/actions/navigation";

import NavigationComponent from "./containers/NavigationContainer";

export class App extends React.Component {

  render() {

    return (
      <div className={'container-fluid text-center'}>
        {/*<Header store={this.props.store} sections={
          [
            {
              id: 1,
              name: 'Balance',
              action: showBalance
            },
            {
              id: 2,
              name: 'My Payments',
              action: showMyPayments
            },
            {
              id: 3,
              name: 'Internal',
              action: showInternal
            },
            {
              id: 4,
              name: 'External',
              action: showExternal
            }
          ]
        }/>*/}
        <NavigationComponent />
      </div>
    );
  }
}