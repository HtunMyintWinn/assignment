import React, {useState, useContext} from 'react';
import {View, Text, ToastAndroid} from 'react-native';

// Components
import Header from '@components/login/header';
import {AuthContext} from '@context/context';
import {appStorage} from '../../../utils';

const Register = ({navigation}) => {
  const [registerData,setRegisterData] = useState({
    email : '',
    password : '',
    confirm_password : '',
    isLogin : false
  });

  const {getAuth} = useContext(AuthContext);

  const actionHandler = (values) => {
    let data = {
      userEmail: values.email,
      userPwd: values.password,
      userConfirmPwd: values.confirm_password
    };
    try {
      appStorage.setItem('@user.data', JSON.stringify(data));
      getAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  const footerHandler = () => {
    if (registerData.isLogin) {
      navigation.navigate('Register');
    } else {
      navigation.goBack();
    }
  };

  const nextHandler = (values) => {
    if(values.email)
    {
    navigation.navigate('Password',{data: values,setData: setRegisterData,action : actionHandler});
    }
    else ToastAndroid.show('Email is required!', ToastAndroid.SHORT);
  };

  return (
    <View>
      <Header
        authData={registerData}
        setAuthData={setRegisterData}
        footerAction={footerHandler}
        nextAction={nextHandler}
      />
    </View>
  );
};

export default Register;
