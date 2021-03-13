export default {
  LOGIN_FAILED: {
    name: 'LOGIN_FAILED',
    description: 'Login failed because the username or password was wrong',
    type: 'AUTHENTICATION',
  },
  ACCOUNT_ALREADY_EXISTS: {
    name: 'ACCOUNT_ALREADY_EXISTS',
    description: 'Registration failed because the account already exists',
    type: 'AUTHENTICATION',
  },
  UNKNOWN_DATABASE_ERROR: {
    name: 'UNKNOWN_ERROR',
    description: 'An error was thrown by the database, but no cause was found',
    type: 'DATABASE',
  },
  KNOWN_ERROR: {
    name: 'KNOWN_ERROR',
    description: 'An error was thrown by the database with an explanation',
    type: 'DATABASE',
  },
  OTP_REQUEST_LIMIT: {
    name: 'OTP_REQUEST_LIMIT',
    description: 'The user requested for the OTP too many times',
    type: 'LIMIT',
  },
  OTP_CONFIRM_LIMIT: {
    name: 'OTP_REQUEST_LIMIT',
    description: 'The user tried to confirm the OTP too many times',
    type: 'LIMIT',
  },
  EMAIL_FAILED: {
    name: 'EMAIL_FAILED',
    description: 'Not a valid email ID',
    type: 'VALIDATION',
  },
  PASSWORD_WEAK: {
    name: 'PASSWORD_WEAK',
    description: 'Password strength is too weak',
    type: 'VALIDATION',
  },
};

/*
Example error format
{
  error: 'PASSWORD_WEAK',
  message: '...'
}
*/
