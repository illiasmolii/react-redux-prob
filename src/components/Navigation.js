import React from "react";
import PropTypes from 'prop-types';

import { pages } from "../state/actions/navigation";
import LoginComponent from "../containers/LoginContainer";
import BalanceComponent from "../containers/BalanceContainer";
import InternalPaymentComponent from "../containers/InternalPaymentContainer";
import ExternalPaymentComponent from "../containers/ExternalPaymentContainer";
import MyPaymentsComponent from "../containers/MyPaymentsContainer";

export class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.currentPage = this.currentPage.bind(this);
  }

  currentPage() {
    switch (this.props.page) {

      case (pages.BALANCE):
        return <BalanceComponent />;

      case (pages.INTERNAL):
        return <InternalPaymentComponent />;

      case (pages.EXTERNAL):
        return <ExternalPaymentComponent />;

      /*case (pages.PAYMENT_DETAILS):
        return <PaymentDetails payment={state.navigation.payload}/>; TODO */

      default:
        return <MyPaymentsComponent />;
    }
  }

  render() {
    if (!this.props.authenticated) {
      return <LoginComponent />
    }

    return this.currentPage();
  }
}

Navigation.propTypes = {
  authenticated: PropTypes.bool.required,
  page: PropTypes.string.required
};