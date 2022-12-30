import api from '../../utils/api';

/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncIsPreloadProcess() {
  return (dispatch) => {
    try {
      // preload process
      const authUser = api.getOwnProfile();
      dispatch(setIsPreloadActionCreator(authUser));
    } catch (error) {
      dispatch(setIsPreloadActionCreator(null));
      alert(error);
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncIsPreloadProcess,
};
