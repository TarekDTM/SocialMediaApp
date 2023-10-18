import {Controller, Form, useForm} from 'react-hook-form';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {loginUser, registerUser} from '../../../store/auth';
import {Link} from '@react-navigation/native';
interface UserRegister {
  email: string;
  password: string;
}
const LoginScreen = () => {
  const {loading, userInfo, error, success} = useAppSelector(
    state => state.auth,
  );
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submitForm = data => {
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();
    dispatch(loginUser(data));
  };
  return (
    <View>
      {error && <Text style={{color: 'red'}}>{error}</Text>}
      {loading && <Text style={{color: 'red'}}>Loading</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="email"
            style={{color: 'black'}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            secureTextEntry
            placeholder="password"
            style={{color: 'black'}}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(submitForm)} />
      <View style={{marginVertical: 30}}>
        <Link style={{color: 'green'}} to={'/register'}>
          <Text>Register</Text>
        </Link>
      </View>
    </View>
  );
};
export default LoginScreen;
