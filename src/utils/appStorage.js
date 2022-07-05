import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";

export const appStorage = {
  setItem: (key, value) => {
    try {
          RNSecureKeyStore.set(key,value, {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
          .then((res) => {
            console.log(res);
          }, (err) => {
            console.log(err);
          });
    } catch (error) {
      console.log('error', error);
    }
  },

  getItem: key => {
    try {
      return RNSecureKeyStore.get(key)
      .then((res) => {
          console.log(res);
      }, (err) => {
          console.log(err);
      });
    } catch (error) {
      console.log('error', error);
    }
  },

  removeItem: key => {
    try {
      RNSecureKeyStore.remove(key)
      .then((res) => {
          console.log(res);
      }, (err) => {
          console.log(err);
      });
    } catch (error) {
      console.log('error', error);
    }
  },
};
