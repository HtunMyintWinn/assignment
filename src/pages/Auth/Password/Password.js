import React,{useEffect, useState} from 'react';
import {View, Text,TextInput, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

// Styles
import styles from './Style';
import {useLocal} from '../../../hook';


const Password = (props) => {
  const local = useLocal();
  const { params } = props.route;
  const authData = params.data;
  const setAuthData = params.setData;
  const backAction = () => {
    props.navigation.navigate('Login');
  }; 
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm_password,setConfirmPassword] = useState('');  
  
  const setPasswordValue = (value) => {
    setPassword(value);
    setAuthData({...authData,password:password,confirm_password:confirm_password});
  }

  const setConfirmPasswordValue = (value) => {
    setConfirmPassword(value);
    setAuthData({...authData,password:password,confirm_password:confirm_password});
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{local.security}</Text>
      {authData.isLogin ? 
      <>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={local.pwdPlaceholder}
            secureTextEntry
            style={[styles.input, {marginTop: 20}]}
            value={password}
            onChangeText={(text) => setPasswordValue(text)}
          />
        </View>
        <View
          style={{flexDirection: 'row', marginLeft: 20, top: 13}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={{color: 'gray',marginTop:8}}>Remember Password</Text>
        </View>
      </>
       :
       <>
       <View style={styles.inputContainer}>
       <TextInput
         placeholder={local.pwdPlaceholder}
         secureTextEntry
         style={[styles.input, {marginTop: 20}]}
         value={password}
         onChangeText={(text) => setPasswordValue(text)}
       />
       </View> 
       <View style={styles.inputContainer}>
          <TextInput
            placeholder={local.confirmPwdPlaceholder}
            secureTextEntry
            style={[styles.input, {marginTop: 20}]}
            value={confirm_password}
            onChangeText={(text) => setConfirmPasswordValue(text)}
          />
        </View>
        </>
     }
      <View style={styles.btnGroup}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={backAction}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>{local.back}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonContainer,{marginLeft:30}]}
          onPress={() =>params.action(authData)}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>{authData.isLogin? local.login : local.register}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default Password;
