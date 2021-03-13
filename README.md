## Introduction

Constantly having to define error cases for each API integration is a chore. This package aims to resolve this issue by adding as many specific (yet common enough) errors as possible based on our current API integrations. This formal, semantic definition of errors will allow us to reduce the time taken to integrate APIs and allows us to account for edge cases even better.

The list will continue to grow. Feel free to open a pull request to add more keys or types.

## How to use
This package can be used on the server side as well as on the browser.
The server can send an error message in the following format:
```js
{
    error: errors.LOGIN_FAILED
}
```
The browser can then use the imported error file to understand the error semantically and deal with it in the right way.
```js
if(res.error.name === 'LOGIN_FAILED'){
    // Do something
}
```