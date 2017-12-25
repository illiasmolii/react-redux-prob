import React from "react";

import Header from './components/Header.js';
import MyPayments from "./components/tabs/my-payments/MyPayments";
import PaymentDetails from "./components/tabs/my-payments/PaymentDetails";
import External from "./components/tabs/External";
import Internal from "./components/tabs/Internal";
import Login from "./components/tabs/Login";
import {
  pages, showBalance, showExternal, showInternal, showMyPayments
} from "./state/actions/navigation";
import Balance from "./components/tabs/Balance";

export class App extends React.Component {

  navigation() {
    const state = this.props.store.getState();

    switch (state.navigation.page) {

      case (pages.BALANCE):
        return <Balance balance={state.balance.value}/>;

      case (pages.INTERNAL):
        return <Internal store={this.props.store} />;

      case (pages.EXTERNAL):
        return <External store={this.props.store} />;

      case (pages.PAYMENT_DETAILS):
        return <PaymentDetails payment={state.navigation.payload}/>;

      default:
        return <MyPayments store={this.props.store}/>;
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
        }/>
        { currentPage }
      </div>
    );
  }
}