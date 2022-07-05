import React, {useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, ToastAndroid} from 'react-native';

// Components
import styles from './Style';
import {AuthContext} from '@context/context';
import {appStorage} from '../../utils';
import {useLocal} from '../../hook';
import Header from '@components/dashboard/dashboardHeader';
import ProductList from '@components/dashboard/product/productList';

const Dashboard = ({navigation}) => {
  const {getAuth, userInfo} = useContext(AuthContext);

  const local = useLocal();

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   try {
  //     RNSecureKeyStore.get('@user.data')
  //     .then((res) => {
  //         const data = JSON.parse(res);
  //     }, (err) => {
  //         console.log(err);
  //     });
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  const logoutHandler = () => {
    try {
      appStorage.removeItem('@user.token');
      getAuth(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const addToCartHandler = () => {
    ToastAndroid.show(local.successAdded, ToastAndroid.SHORT);
  };

  const detailHandler = value => {
    navigation.navigate('ProductDetail', {data: value});
  };

  return (
    <View style={styles.container}>
      {/* user information */}
      <Header
        data={userInfo}
        logout={logoutHandler}
        logoutTitle={local.logout}
      />

      {/* product list */}
      <ProductList
        priceTitle={local.price}
        addToCartTitle={local.addToCart}
        addToCartAction={addToCartHandler}
        productDetail={detailHandler}
      />
    </View>
  );
};

export default Dashboard;
