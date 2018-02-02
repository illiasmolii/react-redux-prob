import { connect } from 'react-redux'
import { Navigation } from "../components/Navigation";

const mapStateToProps = state => {
  return {
    authenticated: !!state.auth.name && !!state.auth.pass,
    page: state.navigation.page
  }
};

const NavigationComponent = connect(
  mapStateToProps
)(Navigation);

export default NavigationComponent;