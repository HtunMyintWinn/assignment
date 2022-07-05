import React, {useState, useEffect} from 'react';
import {View, Text,Image} from 'react-native';
import {AuthContext} from '../context/context';
import {NavigationContainer} from '@react-navigation/native';
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";


// Stack
import AuthStack from './stack/AuthStack';
import DashboardStack from './stack/DashboardStack';
import {appStorage} from '../utils';

const appNavigator = () => {
  const [lang, setLang] = useState('en');
  const [auth, setAuth] = useState(false);
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    storeData();
  }, []);

  const storeData = () => {
    try {
      RNSecureKeyStore.get('@lang')
      .then((res) => {
        setLang(res);
      }, (err) => {
          console.log(err);
      });
      setAuth(false);
      setSplashScreen(false);
      RNSecureKeyStore.get('@user.data')
      .then((res) => {
        if (res) {
          setAuth(true);
          setTimeout(() => {
            setSplashScreen(false);
          }, 3000);
        } else {
          setAuth(false);
          setSplashScreen(false);
        }
      }, (err) => {
          console.log(err);
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const context = {
    lang,
    auth,
    getAuth: value => {
      setAuth(value);
    },
    getLang: value => {
      setLang(value);
    },
  };

  if (splashScreen) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../assets/image/man.png')}  style={{width: 51,height: 51,resizeMode: 'contain'}}/>
        <Text>Htun Myint Winn</Text>
      </View>
    );
  } else if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default appNavigator;
