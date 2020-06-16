import {showMessage} from 'react-native-flash-message';

export const keyExtractor = (item, index) => index.toString();


export const errorToast = (description, msg, position) => {
  showMessage({
    message: msg ? msg : 'Error',
    description: description ? description : 'Oops! something went wrong',
    type: 'danger',
    position: position ? position : 'bottom',
    icon: 'auto',
  });
};

export const successToast = (description, msg, position) => {
  showMessage({
    message: msg ? msg : 'Success',
    description: description ? description : '',
    type: 'success',
    position: position ? position : 'bottom',
    icon: 'auto',
  });
};
export const makeUrl = endpoint =>
  `https://api.nutrra.com/${endpoint}`;
