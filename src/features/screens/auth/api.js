import {axiosInstance} from '../../../app/components/utils/AxiosConfig';
import {makeUrl} from '../../../app/components/utils/genericUtils';
export const userLoginApi = payload => {
  return axiosInstance({
    method: 'POST',
    url: makeUrl('users/login'),
    data: payload,
  });
};

export const userSignupApi = payload => {
  return axiosInstance({
    method: 'POST',
    url: makeUrl('users/register'),
    data: payload,
  });
};
