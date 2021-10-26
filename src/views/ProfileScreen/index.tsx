import { GraphQLResult } from '@aws-amplify/api';
import { useFocusEffect } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IProfile, ProfileComponent } from '../../components/Profile';
import { AppContainer } from '../../container';
import { getProfile } from '../../graphql/queries';
import { finishLoading } from '../../redux/slice/appslice';
import { GetProfileQuery } from '../../types/api';

export const ProfileScreen: FunctionComponent = () => {
  const [formData, updateFormData] = useState<IProfile>({
    name: '',
    email: '',
    phone: '',
    address_1: '',
    address_2: '',
    address_3: '',
    city: '',
    state: '',
    postcode: '',
  });
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      const getProfileFunction = async () => {
        try {
          const user = await Auth.currentAuthenticatedUser();
          const res: GraphQLResult<GetProfileQuery> = (await API.graphql(
            graphqlOperation(getProfile, { email: user.attributes.email }),
          )) as GraphQLResult<GetProfileQuery>;

          if (res?.data?.getProfile) {
            updateFormData(prev => {
              return {
                ...prev,
                name: res?.data?.getProfile?.name || '',
                email: res?.data?.getProfile?.email || '',
                phone: res?.data?.getProfile?.phone || '',
                address_1: res?.data?.getProfile?.address_1 || '',
                address_2: res?.data?.getProfile?.address_2 || '',
                address_3: res?.data?.getProfile?.address_3 || '',
                city: res?.data?.getProfile?.city || '',
                state: res?.data?.getProfile?.state || '',
                postcode: res?.data?.getProfile?.postcode || '',
              };
            });
          }
        } catch (err) {
          console.log(err);
        } finally {
          dispatch(finishLoading());
        }
      };
      getProfileFunction();
    }, [dispatch]),
  );

  return (
    <AppContainer>
      <ProfileComponent formData={formData} />
    </AppContainer>
  );
};
