import React from "react";

import NavigationComponent from "./containers/NavigationContainer";
import HeaderComponent from "./containers/HeaderContainer";

export class App extends React.Component {

  render() {

    return (
      <div className={'container-fluid text-center'}>
        <HeaderComponent />
        <NavigationComponent />
      </div>
    );
  }
}