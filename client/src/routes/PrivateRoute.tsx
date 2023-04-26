import React from 'react';
import { Route, Redirect, RouteProps  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


type PrivateRouteProps = RouteProps & {
  component: React.ComponentType<any>;
  path: String;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};


export default PrivateRoute