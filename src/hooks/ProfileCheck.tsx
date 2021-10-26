import { GraphQLResult } from '@aws-amplify/api';
import { useFocusEffect } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IProfile, ProfileComponent } from '../components/Profile';
import { BaseContainer } from '../container';
import { getProfile } from '../graphql/queries';
import { finishLoading, setProfileCreated } from '../redux/slice/appslice';
import { RootState } from '../redux/store';
import { GetProfileQuery } from '../types/api';

interface ProfileCheckProps {
  children: ReactNode;
}
export const ProfileCheck: FunctionComponent<ProfileCheckProps> = ({
  children,
}) => {
  const profileCreated = useSelector(
    (state: RootState) => state.app.profileCreated,
  );

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
  const componentMounted = useRef(true);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      const checkUserProfile = async () => {
        try {
          const user = await Auth.currentAuthenticatedUser();

          updateFormData(prev => {
            return {
              ...prev,
              email: user.attributes.email,
            };
          });
          if (user) {
            const profile: GraphQLResult<GetProfileQuery> = (await API.graphql(
              graphqlOperation(getProfile, { email: user.attributes.email }),
            )) as GraphQLResult<GetProfileQuery>;
            if (profile.data?.getProfile && componentMounted.current) {
              dispatch(setProfileCreated());
            } else {
              updateFormData(prev => {
                return {
                  ...prev,
                  name: '',
                  phone: '',
                  address_1: '',
                  address_2: '',
                  address_3: '',
                  city: '',
                  state: '',
                  postcode: '',
                };
              });
              dispatch(finishLoading());
            }
          }
        } catch (err) {
          console.log(err);
          if (componentMounted.current) {
            updateFormData(prev => {
              return {
                ...prev,
                name: '',
                phone: '',
                address_1: '',
                address_2: '',
                address_3: '',
                city: '',
                state: '',
                postcode: '',
              };
            });
          }
          if (!profileCreated) {
            dispatch(finishLoading());
          }
        }
      };
      checkUserProfile();
      return () => {
        // This code runs when component is unmounted
        componentMounted.current = false; // (4) set it to false when we leave the page
      };
    }, [dispatch, profileCreated]),
  );
  return (
    <>
      {!profileCreated && (
        <BaseContainer>
          <ProfileComponent formData={formData} />
        </BaseContainer>
      )}
      {profileCreated && children}
    </>
  );
};

export default ProfileCheck;
