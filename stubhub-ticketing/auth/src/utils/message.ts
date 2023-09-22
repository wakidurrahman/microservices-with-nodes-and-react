/**
 * Global message Object
 * Read-only properties are not super common,
 * but they can be created using Object.defineProperty() or Object.freeze()
 */

export default Object.freeze({
  //User
  ACCOUNT_WITH_THAT_EMAIL_ALREADY_EXISTS:
    'Account with that email address already exists',
  SOME_THING_MISSING: 'Missing Something into your provided input',

  // Common Message
  IS_NOT_FOUND_WITH_ID_OF: 'is not found with id of',
  THIS_IN_VALID_MONGODB_ID: 'This is not valid mongodb _id',
  REQUEST_BODY_IS_EMPTY: 'Request body is empty!',
  DATA_FETCH: 'All Data fetching successful!',
  CREATE_SUCCESSFUL: 'Particular Data Create Successfully!',
  PARTICULAR_DATA_FATCH: 'Particular data fetch Successfully!',
  UPDATE_PARTICULAR_DOCUMENT: 'Particular document update Successfully!',
  DELETE_PARTICULAR_DOCUMENT: 'Particular document delete Successfully!',
});
