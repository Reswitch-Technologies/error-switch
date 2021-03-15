// yarn dts-gen --expression-file errorSwitch.js

const TYPES = {
  AUTHENTICATION: 'AUTHENTICATION',
  DATABASE: 'DATABASE',
  LIMIT: 'LIMIT',
  VALIDATION: 'VALIDATION',
  AUTHORIZATION: 'AUTHORIZATION',
  APPLICATION: 'APPLICATION',
  GLOBAL: 'GLOBAL',
};

module.exports = {

  // AUTHENTICATION ERRORS
  LOGIN_FAILED: {
    name: 'LOGIN_FAILED',
    description: 'Login failed because the username or password was wrong',
    type: TYPES.AUTHENTICATION,
  },
  ACCOUNT_ALREADY_EXISTS: {
    name: 'ACCOUNT_ALREADY_EXISTS',
    description: 'Registration failed because the account already exists',
    type: TYPES.AUTHENTICATION,
  },
  GOOGLE_FAILED: {
    name: 'GOOGLE_FAILED',
    description: 'Google login failed',
    type: TYPES.AUTHENTICATION,
  },
  FACEBOOK_FAILED: {
    name: 'FACEBOOK_FAILED',
    description: 'Facebook login failed',
    type: TYPES.AUTHENTICATION,
  },
  TWITTER_FAILED: {
    name: 'TWITTER_FAILED',
    description: 'Twitter login failed',
    type: TYPES.AUTHENTICATION,
  },
  GITHUB_FAILED: {
    name: 'GITHUB_FAILED',
    description: 'Github login failed',
    type: TYPES.AUTHENTICATION,
  },
  APPLE_FAILED: {
    name: 'APPLE_FAILED',
    description: 'Apple login failed',
    type: TYPES.AUTHENTICATION,
  },
  INVALID_TOKEN: {
    name: 'INVALID_TOKEN',
    description: 'The token used for authentication is invalid',
    type: TYPES.AUTHENTICATION,
  },
  EXPIRED_TOKEN: {
    name: 'EXPIRED_TOKEN',
    description: 'The token used for authentication has expired',
    type: TYPES.AUTHENTICATION,
  },

  // DATABASE ERRORS
  UNKNOWN_DATABASE_ERROR: {
    name: 'UNKNOWN_ERROR',
    description: 'An error was thrown by the database, but no cause was found',
    type: TYPES.DATABASE,
  },
  KNOWN_DATABASE_ERROR: {
    name: 'KNOWN_ERROR',
    description: 'An error was thrown by the database with an explanation',
    type: TYPES.DATABASE,
  },
  ENTRY_CREATE_FAILED: {
    name: 'ENTRY_CREATE_FAILED',
    description: 'Could not create a new entry',
    type: TYPES.DATABASE,
  },
  ENTRY_UPDATE_FAILED: {
    name: 'ENTRY_UPDATE_FAILED',
    description: 'Could not update the entry',
    type: TYPES.DATABASE,
  },
  ENTRY_DELETE_FAILED: {
    name: 'ENTRY_DELETE_FAILED',
    description: 'Could not delete the entry',
    type: TYPES.DATABASE,
  },

  // LIMIT ERRORS
  OTP_REQUEST_LIMIT: {
    name: 'OTP_REQUEST_LIMIT',
    description: 'The user requested for the OTP too many times',
    type: TYPES.LIMIT,
  },
  OTP_CONFIRM_LIMIT: {
    name: 'OTP_REQUEST_LIMIT',
    description: 'The user tried to confirm the OTP too many times',
    type: TYPES.LIMIT,
  },
  RATE_EXCEEDED: {
    name: 'RATE_EXCEEDED',
    description: 'API rate limit crossed',
    type: TYPES.LIMIT,
  },

  // VALIDATION ERRORS
  EMAIL_INVALID: {
    name: 'EMAIL_INVALID',
    description: 'Not a valid email ID',
    type: TYPES.VALIDATION,
  },
  PASSWORD_WEAK: {
    name: 'PASSWORD_WEAK',
    description: 'Password strength is too weak',
    type: TYPES.VALIDATION,
  },
  PHONE_INVALID: {
    name: 'PHONE_INVALID',
    description: 'The phone number was invalid',
    type: TYPES.VALIDATION,
  },
  DATA_INVALID: {
    name: 'DATA_INVALID',
    description: 'All or part of the data received was invalid',
    type: TYPES.VALIDATION,
  },

  // AUTHORIZATION ERRORS
  NO_PERMISSION: {
    name: 'NO_PERMISSION',
    description: 'User does not have permission to perform this action',
    type: TYPES.AUTHORIZATION,
  },
  IP_INVALID: {
    name: 'IP_INVALID',
    description: 'This IP address is not allowed to access this endpoint',
    type: TYPES.AUTHORIZATION,
  },
  USER_BLOCKED: {
    name: 'USER_BLOCKED',
    description: 'This user is blocked',
    type: TYPES.AUTHORIZATION,
  },

  // APPLICATION ERRORS
  PAYMENT_CREATE_FAILED: {
    name: 'PAYMENT_CREATE_FAILED',
    description: 'Failed to create the payment request',
    type: TYPES.APPLICATION,
  },
  PAYMENT_AUTHORIZATION_FAILED: {
    name: 'PAYMENT_AUTHORIZATION_FAILED',
    description: 'Payment authorization failed',
    type: TYPES.APPLICATION,
  },
  PAYMENT_CAPTURE_FAILED: {
    name: 'PAYMENT_CAPTURE_FAILED',
    description: 'Failed to capture an authorized payment',
    type: TYPES.APPLICATION,
  },
  PAYMENT_REFUND_FAILED: {
    name: 'PAYMENT_REFUND_FAILED',
    description: 'Failed to refund a payment',
    type: TYPES.APPLICATION,
  },
  PAYMENT_SIGNATURE_MISMATCH: {
    name: 'PAYMENT_SIGNATURE_MISMATCH',
    description: 'Payment signature does not match',
    type: TYPES.APPLICATION,
  },
  EMAIL_SEND_FAILED: {
    name: 'EMAIL_SEND_FAILED',
    description: 'Failed to send an email',
    type: TYPES.APPLICATION,
  },
  FILE_UPLOAD_FAILED: {
    name: 'FILE_UPLOAD_FAILED',
    description: 'Could not upload a file',
    type: TYPES.APPLICATION,
  },
  OTP_NOT_SENT: {
    name: 'OTP_NOT_SENT',
    description: 'OTP could not be sent',
    type: TYPES.APPLICATION,
  },
  EMAIL_OTP_NOT_SENT: {
    name: 'EMAIL_OTP_NOT_SENT',
    description: 'Email OTP could not be sent',
    type: TYPES.APPLICATION,
  },
  OTP_INCORRECT: {
    name: 'OTP_INCORRECT',
    description: 'OTP entered by the user was incorrect',
    type: TYPES.APPLICATION,
  },

  // GLOBAL
  GLOBAL_ERROR: {
    name: 'GLOBAL_ERROR',
    description: 'A generic, global error occurred, exit immediately',
    type: TYPES.GLOBAL,
  },

};

/*
Example error format
{
  error: 'PASSWORD_WEAK',
  message: '...'
}
*/
