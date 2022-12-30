import { ActionType } from './action';

/**
 * @TODO: Define the reducer for the authUser state
 */
function authUserReducer(authUser = null, action = {}) {
  switch (ActionType.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
