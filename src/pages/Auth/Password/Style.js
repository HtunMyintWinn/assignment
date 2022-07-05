import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// const widht = Dimensions.get('window').width
// const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(8),
  },
  title: {
    fontSize: 30,
    color:'#2ECC71'
  },
  button: {
    backgroundColor: '#2ECC71',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('1%'),
    borderRadius: hp(1),
    marginTop: hp(1),
  },
  btnGroup:{
    flexDirection: 'row',
  },
  inputContainer: {
    width: wp(100),
    alignItems: 'center',
    marginTop: hp(5),
  },
  input: {
    backgroundColor: '#ddd',
    width: wp(70),
    paddingHorizontal: hp(2),
    paddingVertical: hp(1),
    borderRadius: hp(1),
    margin: 0,
  },
  buttonContainer: {
    marginTop: hp(5),
    backgroundColor: '#2ECC71',
    width: wp(30),
    paddingVertical: hp(1.8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(0.5),
  },
  buttonText: {
    color: '#fff',
  },
  accContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  footerText: {
    color: '#2ECC71',
  },
  develop_footer: {
    marginTop: hp(43),
  }
});

export default styles;
