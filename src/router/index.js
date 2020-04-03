import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Router = ({ path, main: MainComponent, exact }) => {
  if (!exact) {
    return <Redirect to="/" />;
  }
  return (
    <Route
      path={path}
      exact={exact}
      render={props => <MainComponent {...props} />}
    />
  );
};

Router.defaultProps = {
  main: PropTypes.elementType,
  exact: false,
};

Router.propTypes = {
  path: PropTypes.string.isRequired,
  main: PropTypes.elementType,
  exact: PropTypes.bool,
};

export default Router;
