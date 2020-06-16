import {
  combineValidators,
  isRequired,
  composeValidators,
  matchesPattern,
  hasLengthGreaterThan,
  hasLengthLessThan,
  matchesField,
  createValidator,
} from 'revalidate';

export const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
export const shouldBeLessThen = a =>
  createValidator(
    message => value => {
      if (value && value >= a) {
        return message;
      }
    },
    field => `${field} should be less then ${a}`,
  );
export const validateSignupForm = combineValidators({
  email: composeValidators(
    isRequired({message: 'Please enter your Email'}),
    matchesPattern(emailRegex)({message: 'Invalid Email'}),
  )(),
  password: composeValidators(
    isRequired({message: 'Please enter your Password'}),
    hasLengthGreaterThan(7)({
      message: 'Password must be at least 8 characters.',
    }),
    hasLengthLessThan(17)({message: 'Password must be at most 16 characters.'}),
  )(),
  confirm_password: composeValidators(
    isRequired({message: 'Please enter your Password again'}),
    matchesField('password')({message: "Passwords doesn't match"}),
  )(),
 
});

export const validateLoginForm = combineValidators({
  email: composeValidators(
    isRequired({message: 'Please enter your Email'}),
    matchesPattern(emailRegex)({message: 'Invalid Email'}),
  )(),
  password: composeValidators(
    isRequired({message: 'Please enter your Password'}),
    hasLengthGreaterThan(7)({
      message: 'Password must be at least 8 characters.',
    }),
    hasLengthLessThan(17)({message: 'Password must be at most 16 characters.'}),
  )(),
});
