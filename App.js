import React, {Component} from 'react';
import NavigationService from './src/app/layout/NavigationService';
import AppNavigator from './src/app/layout/Navigation';
import {Provider} from 'react-redux';
import {configureStore} from './src/app/store/configureStore';
import FlashMessage from 'react-native-flash-message';

const store = configureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
          <FlashMessage duration={3000} color={'#ffffff'} />
      </Provider>
    );
  }
}

export default App;
