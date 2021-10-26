import { GraphQLResult } from '@aws-amplify/api';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as SplashScreen from 'expo-splash-screen';
import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProfile } from './src/graphql/queries';
import { AppMiddleware } from './src/hooks';
import {
  finishLoading,
  resetProfileCreated,
  setProfileCreated,
  updateEmail,
} from './src/redux/slice/appslice';
import { resetLoggedIn, setLoggedIn } from './src/redux/slice/authSlice';
import { AppRoutes } from './src/routes/AppRoutes';
import { GetProfileQuery } from './src/types/api';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const prepareApp = async () => {
      dispatch(finishLoading());
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          dispatch(setLoggedIn());
          dispatch(updateEmail(user.attributes.email));
          const profile: GraphQLResult<GetProfileQuery> = (await API.graphql(
            graphqlOperation(getProfile, { email: user.attributes.email }),
          )) as GraphQLResult<GetProfileQuery>;
          if (profile.data?.getProfile) {
            dispatch(setProfileCreated());
          } else {
            dispatch(resetProfileCreated());
          }
        } else {
          dispatch(resetProfileCreated());
        }
      } catch (err) {
        if (err === 'The user is not authenticated') {
          dispatch(resetLoggedIn());
          dispatch(updateEmail(''));
          dispatch(resetProfileCreated());
        }
      } finally {
        await SplashScreen.hideAsync();
      }
    };
    prepareApp();
  }, [dispatch]);

  return (
    <AppMiddleware>
      <AppRoutes />
    </AppMiddleware>
  );
};

export default App;
