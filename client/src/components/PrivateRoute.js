import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css';

class PrivateRoute extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
  render() {
    const {
      component: Component,
      redirect = '/login',
      auth,
      userNotLoggedIn,
      ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (auth.isAuthenticated) {
            return <Component {...props} />;
          } else {
            M.toast({ html: 'You are not logged in.' });
            return <Redirect to={redirect} />;
          }
        }}
      />
    );
  }
}

PrivateRoute.propTypes = {};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
