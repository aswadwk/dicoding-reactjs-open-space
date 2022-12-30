import api from '../../utils/api';

/**
 * @TODO: Define all the actions (creator) for the users state
 */
const ActionType = {
  RECEiVE_USER: 'RECEIVE_USER',
};
function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEiVE_USER,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async () => {
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error);
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
