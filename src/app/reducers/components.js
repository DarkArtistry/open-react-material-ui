function components(state ={}, action) {
    switch (action.type) {
      case 'SET_ROOT_COMPONENT':
          console.log('root action ! : ', action);
          const setRootComponentState = state.components ? JSON.parse(JSON.stringify(action.data)) : {}
          console.log('setRootComponentState : ', setRootComponentState);
        return {
          ...state,
          components: setRootComponentState
        }
      default:
        return state
    }
  }

export default components