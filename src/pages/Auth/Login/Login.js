import React, {useState, useContext} from 'react';
import {View, Text, ToastAndroid, TouchableOpacity} from 'react-native';

// Components
import Header from '@components/login/header';
import {AuthContext} from '@context/context';
import {appStorage} from '../../../utils';
import styles from './Style';
import SelectDropdown from 'react-native-select-dropdown';
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";


const Login = ({navigation}) => {
  const [loginData,setLoginData] = useState({ email: '', password: '', isLogin :true });

  const {lang, getAuth, getLang} = useContext(AuthContext);

  const actionHandler = () => {
    try {
      RNSecureKeyStore.get('@user.data')
      .then((res) => {
        if (res) {
          console.log('set login data',res);
          goLogin(JSON.parse(res));
        } else {
          setAuth(false);
          setSplashScreen(false);
        }
      }, (err) => {
          console.log(err);
      });
      
    } catch (error) {
      console.log('error :', error);
    }
  };

  const goLogin = value => {
    console.log('store data',value);
    if (value.userEmail === email && value.userPwd === password) {
      getAuth(true);
    } else {
      ToastAndroid.show('Email or password wrong!', ToastAndroid.SHORT);
    }
  };

  const footerHandler = () => {
    if (loginData.isLogin) {
      navigation.navigate('Register');
    } else {
      navigation.navigate('Login');
    }
  };

  const nextHandler = (values) => {
    navigation.navigate('Password',{data: values,setData: setLoginData,action : actionHandler});
  };

  const changeLanguage = value => {
    try {
      appStorage.setItem('@lang', value);
      getLang(value);
    } catch (error) {
      console.log('error', error);
    }
  };

  const languague = ["English","Myanmar"];

  return (
    <View>
      <View style={styles.languageContainer}>
        <SelectDropdown
          data={languague}
          defaultButtonText={'Language'}
          onSelect={(selectedItem, index) => {
             (index === 0) ? changeLanguage("en") : changeLanguage("mm");
          }}
        />
      </View>
      <Header
        authData = {loginData}
        setAuthData={setLoginData}
        footerAction={footerHandler}
        nextAction={nextHandler}
      />
    </View>
  );
};

export default Login;
