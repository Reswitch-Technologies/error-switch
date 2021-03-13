export default {
  errors: {
    AUTHENTICATION: {
      A1: {
        name: 'LOGIN_FAILED',
        description: 'Login failed because the username or password was wrong',
      },
      A2: {
        name: 'ACCOUNT_ALREADY_EXISTS',
        description: 'Registration failed because the account already exists',
      },
    },
    DATABASE: {
      D1: {
        name: 'UNKNOWN_ERROR',
        description: 'An error was thrown by the database, but no cause was found',
      },
      D2: {
        name: 'KNOWN_ERROR',
        description: 'An error was thrown by the database with an explanation',
      },
    },
    LIMIT: {
      L1: {
        name: 'OTP_REQUEST_LIMIT',
        description: 'The user requested for the OTP too many times',
      },
      L2: {
        name: 'OTP_CONFIRM_LIMIT',
        description: 'The user tried to confirm the OTP too many times',
      },
    },
    VALIDATION: {
      V1: {
        name: 'EMAIL_FAILED',
        description: 'Not a valid email ID',
      },
      V2: {
        name: 'PASSWORD_WEAK',
        description: 'Password strength is too weak',
      },
    },
  },

};

/*
Example error format
{
  error: 'A1',
  message: '...'
}
*/
