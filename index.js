export default {
  AUTHENTICATION: {
    LOGIN_FAILED: {
      description: 'Login failed because the username or password was wrong',
    },
    ACCOUNT_ALREADY_EXISTS: {
      description: 'Registration failed because the account already exists',
    },
  },
  DATABASE: {
    UNKNOWN_ERROR: {
      description: 'An error was thrown by the database, but no cause was found',
    },
    KNOWN_ERROR: {
      description: 'An error was thrown by the database with an explanation',
    },
  },
  LIMIT: {
    OTP_REQUEST_LIMIT: {
      description: 'The user requested for the OTP too many times',
    },
    OTP_CONFIRM_LIMIT: {
      description: 'The user tried to confirm the OTP too many times',
    },
  },
  VALIDATION: {
    EMAIL_FAILED: {
      description: 'Not a valid email ID',
    },
    PASSWORD_WEAK: {
      description: 'Password strength is too weak',
    },
  },
};

/*
Example error format
{
  error: 'EMAIL_FAILED',
  errorType: 'VALIDATION,
  message: '...'
}
*/
