import React from 'react';
import {View, Text, TextInput, TouchableOpacity,Linking} from 'react-native';

// Styles
import styles from './style';
import {useLocal} from '../../hook';

const header = props => {
  const local = useLocal();
  const authData = props.authData;
  const setAuthData = props.setAuthData;
  console.log('header scrren',authData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{authData.isLogin ? local.login : local.register}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={local.emailPlaceholder}
          style={[styles.input, {marginTop: 20}]}
          value={authData.email}
          onChangeText={(text) => setAuthData({...authData,email : text})}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => props.nextAction(authData)}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>{local.next}</Text>
      </TouchableOpacity>

      <View style={styles.accContainer}>
          <Text>{authData.isLogin ? local.noAccount : local.already}</Text>
          <TouchableOpacity onPress={props.footerAction}>
            <Text style={styles.footerText}>{authData.isLogin ? local.register : local.login}</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.develop_footer}>
        <Text>{local.develop_by} <TouchableOpacity onPress={() => Linking.openURL('https://github.com/HtunMyintWinn')}><Text style={{color:'#2ECC71'}}>Htun Myint Winn</Text></TouchableOpacity></Text>
      </View>
    </View>
  );
};

export default header;
