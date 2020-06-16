import {createReducer} from '../../../app/components/utils/reducerUtil';
import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_SIGNUP_START,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from './authConstants';

const initialState = {
  loginLoader: false,
  signupLoader: false,
};

export const userLoginStart = state => {
  return {
    ...state,
    loginLoader: true,
  };
};
export const userLoginSuccess = state => {
  return {
    ...state,
    loginLoader: false,
  };
};
export const userLoginFailure = state => {
  return {
    ...state,
    loginLoader: false,
  };
};
export const userSignupStart = state => {
  return {
    ...state,
    signupLoader: true,
  };
};
export const userSignupSuccess = state => {
  return {
    ...state,
    signupLoader: false,
  };
};
export const userSignupFailure = state => {
  return {
    ...state,
    signupLoader: false,
  };
};
export default createReducer(initialState, {
  [USER_LOGIN_START]: userLoginStart,
  [USER_LOGIN_SUCCESS]: userLoginSuccess,
  [USER_LOGIN_FAILURE]: userLoginFailure,
  [USER_SIGNUP_START]: userSignupStart,
  [USER_SIGNUP_SUCCESS]: userSignupSuccess,
  [USER_SIGNUP_FAILURE]: userSignupFailure,
});
