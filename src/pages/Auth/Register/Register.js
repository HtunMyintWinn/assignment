import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';

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
      userPwd: '123456',
      userConfirmPwd: '123456'
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
    navigation.navigate('Password',{data: values,setData: setRegisterData,action : actionHandler});
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
