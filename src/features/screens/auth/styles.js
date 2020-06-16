import {StyleSheet, Platform} from 'react-native';

export const loginStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  heading:{
    fontSize:40,
    textAlign:'center',
    marginVertical:'18%',
    fontFamily:'Muli-Bold',
    color:'rgb(0, 128, 250)'
  },
  scrollView: {
    flex: 1,
  },
 
  backIconView: {
    height: 48,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    height: 18,
    width: 25,
  },
  loginBottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
  },
  loginBtnView: {
    marginTop: '5%',
  },
  
  bottomText: {
    color: '#050505',
    fontSize: 14,
    flex: 1,
    fontFamily:'Muli-SemiBold'
  },

  topBannerView: {
    marginTop: Platform.OS === 'ios' ? '8%' : '30%',
    marginBottom: '12%',
    paddingHorizontal: 30,
  },
  centerBanner: {
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },
  topBannerImg: {
    width: '100%',
    height: 100,
  },
  centerBannerImg: {
    width: '100%',
    height: 300,
  },
  clickText: {
    color: '#9c9c9c',
    fontSize: 9,
    padding: 2,
    textAlign: 'center',
    marginTop: 5,
  },
});
export const signupStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  textAreaStyles: {
    color: '#050505',
    borderColor: '#ececec',
    borderWidth: 1,
    fontFamily: 'Muli-Regular',
    fontSize: 13,
    borderRadius: 20,
    height: 87,
    paddingLeft: 10,
    textAlignVertical: 'top',
  },
  scrollView: {
    flex: 1,
    //   backgroundColor: '#fafafa',
  },
 
  headerView: {
    width: '100%',
    paddingHorizontal: '4%',
  },
  backIconView: {
    height: 48,
    paddingHorizontal: '5%',
    justifyContent: 'center',
    // alignItems: 'flex-start',
  },
  backIcon: {
    height: 18,
    width: 25,
  },
 
  formView: {
    paddingHorizontal: '5%',
   
  },
});
export const commonStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textAreaStyles: {
    color: '#050505',
    borderColor: '#ececec',
    borderWidth: 1,
    fontFamily: 'Muli-Regular',
    fontSize: 13,
    paddingVertical: 7,
    borderRadius: 25,
    paddingLeft: 10,
  },
  inputStyles: {
    color: '#050505',
    borderColor: '#ececec',
    borderWidth: 1,
    fontFamily: 'Muli-Regular',
    fontSize: 13,
    borderRadius: 20,
    height: 45,
    paddingLeft: 10,
  },
  inputView: {
    marginBottom: Platform.OS === 'ios' ? '8%' : 15,
  },
  inlineFieldView: {
    flexDirection: 'row',
    marginBottom: Platform.OS === 'ios' ? '8%' : 15,
  },
  rightFieldView: {
    width: '50%',
    paddingLeft: '2%',
    paddingTop: Platform.OS === 'ios' ? '5%' : 0,
  },
  leftFieldView: {
    width: '50%',
    paddingRight: '2%',
    paddingTop: Platform.OS === 'ios' ? '5%' : 0,
  },
  signupBtnView: {
    marginTop: '4%',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 128, 250)',
    height: 50,
    borderRadius: 30,
  },
  btnText: {
    color: 'white',
    fontFamily: 'Muli-Bold',
    fontSize: 16,
  },

  signupBottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8%',
    marginBottom: '5%',
  },
  bottomText: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Muli-SemiBold',
    flex: 1,
  },
  boldBottomText: {
    fontFamily: 'Muli-ExtraBold',
  },
});
