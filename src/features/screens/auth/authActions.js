import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_SIGNUP_START,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from './authConstants';
import {
  userLoginApi,
  userSignupApi,
} from './api';
import {
  errorToast,
  setItem,
  successToast,
 
} from '../../../app/components/utils/genericUtils';
import NavigationService from '../../../app/layout/NavigationService';
export const userLoginStart = () => {
  return {
    type: USER_LOGIN_START,
  };
};
export const userLoginSuccess = payload => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload,
  };
};
export const userLoginFailure = () => {
  return {
    type: USER_LOGIN_FAILURE,
  };
};
export const userLogin = payload => async dispatch => {
  console.log('Login Payload', payload);
  dispatch(userLoginStart());
  return userLoginApi(payload)
    .then(async response => {
      console.log('Login Response', response);
      if (response && response.data && response.data.success === true) {
        NavigationService.navigate('Home')
        dispatch(userLoginSuccess());
        
      } else {
        dispatch(userLoginFailure());
        errorToast(response.data.errors[0]);
      }
    })
    .catch(error => {
      dispatch(userLoginFailure());
      errorToast(error.message);
    });
};

export const userSignupStart = () => {
  return {
    type: USER_SIGNUP_START,
  };
};
export const userSignupSuccess = payload => {
  return {
    type: USER_SIGNUP_SUCCESS,
    payload,
  };
};
export const userSignupFailure = () => {
  return {
    type: USER_SIGNUP_FAILURE,
  };
};
export const userSignup = (payload) => async dispatch => {
  dispatch(userSignupStart());
  return userSignupApi(payload)
    .then(response => {
      console.log('Signup response', response);
      if (response && response.data && response.data.success === true) {
        successToast('user registered successfully')
        dispatch(userSignupSuccess());
        NavigationService.navigate('Login');
      } else {
        dispatch(userSignupFailure());
        errorToast(response.data.errors[0]);
      }
    })
    .catch(error => {
      dispatch(userSignupFailure());
      errorToast(error.message);
    });
};

