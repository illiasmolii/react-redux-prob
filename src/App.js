import React from "react";

import Header from './components/Header.js';
import MyPayments from "./components/tabs/my-payments/MyPayments";
import External from "./components/tabs/External";
import Internal from "./components/tabs/Internal";
import Login from "./components/tabs/Login";
import {
  pages, showExternal, showInternal, showMyPayments
} from "./state/actions/navigation";

export class App extends React.Component {

  navigation() {
    switch (this.props.store.getState().navigation.page) {

      case (pages.INTERNAL):
        return <Internal store={this.props.store} />;

      case (pages.EXTERNAL):
        return <External />;

      default:
        return <MyPayments payments={this.props.store.getState().payments.internal}/>;
    }
  }

  isAuthenticated() {
    return !!this.props.store.getState().auth.name;
  }

  render() {
    console.log('STATE: ' + JSON.stringify(this.props.store.getState()));

    let currentPage = this.navigation();

    if (!this.isAuthenticated()) {
      return <Login store={this.props.store}/>;
    }

    return (
      <div className={'container-fluid text-center'}>
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