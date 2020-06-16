import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Field, reduxForm, reset} from 'redux-form';
import {connect} from 'react-redux';
import TextInputField from '../../../app/components/forms/TextInputField';
import {commonStyles, loginStyles} from './styles';
import {Button, Icon} from 'react-native-elements';
import {userLogin} from './authActions';
import {
  validateLoginForm,
 
} from './helpers';
import LoadingComponent from '../../../app/components/utils/LoadingComponent';
import {NavigationEvents} from 'react-navigation';
class LoginScreen extends Component {
  state = {
    secureTextEntry: true,
  };

  componentDidMount() {
  
  }
  handleFormSubmit = async formValues => {
    const payload = {...formValues};
    console.log(payload)
    this.props.userLogin(payload);
  };
  toggleSecureTextEntry = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  };
  resetForm = () => {
    this.props.reset('loginForm');
  };
  render() {
    const {
      loginLoader,
      handleSubmit,
      navigation: {navigate},
    } = this.props;
    const {secureTextEntry} = this.state;
    return (
      <SafeAreaView style={loginStyles.safeAreaView}>
        <NavigationEvents onDidBlur={this.resetForm} />
        <LoadingComponent isVisible={loginLoader} />
        <ScrollView style={loginStyles.scrollView}>
          <Text style={loginStyles.heading}>Login</Text>
          <View style={{paddingHorizontal: '5%'}}>
          
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
                placeholder="Password"
                inputStyles={commonStyles.inputStyles}
                placeholderTextColor="#050505"
                icon={true}
                src={require('../../assets/eye.png')}
                viewStyles={commonStyles.inputView}
                returnKeyType="next"
                autoCapitalize="none"
                secureTextEntry={secureTextEntry}
                iconFunc={this.toggleSecureTextEntry}
              />
             
              <View style={loginStyles.loginBtnView}>
                <Button
                  title="Login"
                  buttonStyle={commonStyles.btn}
                  titleStyle={commonStyles.btnText}
                  onPress={handleSubmit(this.handleFormSubmit)}
                />
              
            </View>

            <View style={loginStyles.loginBottomView}>
              <Text style={loginStyles.bottomText}>
                Don't have an account?{' '}
                <Text
                  style={commonStyles.boldBottomText}
                  onPress={() => navigate('Signup')}>
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const actions = {
  userLogin,
};
const mapStateToProps = state => ({
  loginLoader: state.auth.loginLoader,
});
export default connect(
  mapStateToProps,
  actions,
)(
  reduxForm({
    form: 'loginForm',
    validate: validateLoginForm,
    enableReinitialize: true,
  })(LoginScreen),
);
