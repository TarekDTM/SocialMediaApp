import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logout} from '../../store/auth';

const ProfileScreen = () => {
  const {loading, userInfo, error, success} = useAppSelector(
    state => state.auth,
  );
  const dispatch = useAppDispatch();
  return (
    <View>
      <Button title="Log out" onPress={() => dispatch(logout())} />
      <View>
        <Text style={{fontSize: 24, color: 'black', marginVertical: 8}}>
          Personal info
        </Text>
        <Text style={{color: 'black'}}>{`Name: ${
          userInfo?.user.displayName || 'user'
        }`}</Text>
        <Text style={{color: 'black'}}>{`Email: ${
          userInfo?.user.email || 'email'
        }`}</Text>
      </View>
    </View>
  );
};
export default ProfileScreen;
