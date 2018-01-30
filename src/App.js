import React from "react";

import Header from './components/Header.js';
import PaymentDetails from "./components/pages/PaymentDetails";
import {
  pages, showBalance, showExternal, showInternal, showMyPayments
} from "./state/actions/navigation";
import LoginComponent from "./containers/LoginContainer";
import BalanceComponent from "./containers/BalanceContainer";
import ExternalPaymentComponent from "./containers/ExternalPaymentContainer";
import InternalPaymentComponent from "./containers/InternalPaymentContainer";
import MyPaymentsComponent from "./containers/MyPaymentsContainer";

export class App extends React.Component {

  navigation() {
    // const state = this.props.store.getState();

    switch (pages.BALANCE) {
    // switch (state.navigation.page) {

      case (pages.BALANCE):
        return <BalanceComponent />;

      case (pages.INTERNAL):
        return <InternalPaymentComponent />;

      case (pages.EXTERNAL):
        return <ExternalPaymentComponent />;

      /*case (pages.PAYMENT_DETAILS):
        return <PaymentDetails payment={state.navigation.payload}/>;*/

      default:
        return <MyPaymentsComponent />;
    }
  }

  isAuthenticated() {
    // return !!this.props.store.getState().auth.name;
    return false;
  }

  render() {
    let currentPage = this.navigation();

    if (!this.isAuthenticated()) {
      return <LoginComponent />;
    }

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
        { currentPage }
      </div>
    );
  }
}