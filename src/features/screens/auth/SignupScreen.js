import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {signupStyles, commonStyles, loginStyles} from './styles';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import TextInputField from '../../../app/components/forms/TextInputField';
import {Button} from 'react-native-elements';
import {validateSignupForm} from './helpers';
import LoadingComponent from '../../../app/components/utils/LoadingComponent';
import {userSignup} from'./authActions';
class SignupScreen extends Component {

  goBack = () => {
    this.props.navigation.navigate('Login');
  };
  navigate = screenName => () => {
    this.props.navigation.navigate(screenName);
  };
  handleFormSubmit = async formValues => {
    const payload = {...formValues};
    console.log(payload)
    this.props.userSignup(payload)
    
  
  };
  render() {
    const {handleSubmit,loadingSignup} = this.props;
    return (
      <SafeAreaView style={signupStyles.safeAreaView}>
        <LoadingComponent isVisible={loadingSignup} />
        <View style={signupStyles.headerView}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingVertical: 15,
            }}>
            <TouchableOpacity onPress={this.goBack}>
              <Image
                resizeMode="contain"
                source={require('../../assets/backIcon.png')}
                style={signupStyles.backIcon}
              />
            </TouchableOpacity>
           
          </View>
        </View>

        <ScrollView style={signupStyles.scrollView}>
        <Text style={loginStyles.heading}>Register Here</Text>

          <View style={signupStyles.formView}>
             <Field
              name="email"
              component={TextInputField}
              placeholder="Email"
              inputStyles={commonStyles.inputStyles}
              placeholderTextColor="#050505"
              viewStyles={commonStyles.inputView}
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Field
              name="password"
              component={TextInputField}
              placeholder="Enter Password"
              inputStyles={commonStyles.inputStyles}
              placeholderTextColor="#050505"
              viewStyles={commonStyles.inputView}
              returnKeyType="next"
              autoCapitalize="none"
              secureTextEntry={true}
            />
            <Field
              name="confirm_password"
              component={TextInputField}
              placeholder="Confirm Password"
              inputStyles={commonStyles.inputStyles}
              viewStyles={commonStyles.inputView}
              placeholderTextColor="#050505"
              returnKeyType="done"
              autoCapitalize="none"
              secureTextEntry={true}
              //onSubmitEditing={props.handleSubmit}
            />
            <View style={commonStyles.signupBtnView}>
              <Button
                title="Register"
                buttonStyle={commonStyles.btn}
                titleStyle={commonStyles.btnText}
                onPress={handleSubmit(this.handleFormSubmit)}
              />
            </View>
          </View>
          <View style={commonStyles.signupBottomView}>
            <Text style={commonStyles.bottomText}>
              Already have an account?{' '}
              <Text
                style={commonStyles.boldBottomText}
                onPress={this.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const actions = {
  userSignup
};
const mapStateToProps = state => ({
  loadingSignup: state.auth.signupLoader,

});
export default connect(
  mapStateToProps,
  actions,
)(
  reduxForm({
    form: 'signupForm',
    enableReinitialize: true,
    validate: validateSignupForm,
  })(SignupScreen),
);
