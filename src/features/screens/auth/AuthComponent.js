import React from 'react';
import {ImageBackground, ActivityIndicator} from 'react-native';
import {getItem} from '../../app/common/utils/genericUtils';
import {connect} from 'react-redux';
import {setUserToken} from './authActions';
import {handleAxiosToken} from '../../app/common/utils/AxiosConfig';

class AuthComponent extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const {navigation} = this.props;
    const userToken = await getItem('userToken');
    console.log(`authToken------>`, userToken);
    if (userToken && userToken.token) {
      console.log('Token', userToken);
      handleAxiosToken(userToken.token);
      this.props.setUserToken(userToken);
      navigation.navigate('App');
    } else {
      navigation.navigate('Auth');
      //navigation.navigate('App');
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/launch_screen.png')}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        {/* <ActivityIndicator
          color="black"
          size="large"
          style={{marginBottom: 130}}
        /> */}
      </ImageBackground>
    );
  }
}
const actions = {
  setUserToken,
};
export default connect(null, actions)(AuthComponent);
