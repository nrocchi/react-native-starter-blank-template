import API from '../ConfigAPI'
import {LOGIN_API, CUSTOMERS_API} from '../../constants/Constants'

/**
 *
 * @param {Object} credentials
 *  {
      "email": "email",
      "password": "password"
    }
 */
function postSignIn(credentials) {
  return API({
    method: 'post',
    url: LOGIN_API,
    data: credentials,
  })
}

/**
 *
 * @param {Object} credentials
 *  {
      "company": "string",
      "user": {
        "firstName": "string",
        "lastName": "string",
        "login": "string", => remettre l'email
        "password": "string",
        "confirmPassword": "string",
        "email": "user@example.com",  
        "phone": "string"
      }
    }
 */
function postSignUp(data) {
  return API({
    method: 'post',
    url: CUSTOMERS_API,
    data: {
      company: data.company ? data.company : null,
      user: {
        firstName: data.firstName,
        lastName: data.lastName,
        login: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        email: data.email,
        phone: data.phone,
      },
    },
  })
}

export default {
  postSignIn,
  postSignUp,
}
