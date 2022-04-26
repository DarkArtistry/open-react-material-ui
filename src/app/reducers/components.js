import { nanoid } from '@reduxjs/toolkit'

function components(state ={}, action) {
    switch (action.type) {
      case 'SET_ROOT_COMPONENT':
          let init_root = {}
          const setRootComponentState = state.components ? JSON.parse(JSON.stringify(action.data)) : {}
          console.log('setRootComponentState : ', setRootComponentState);
          init_root[setRootComponentState ? setRootComponentState.id : 'root'] = setRootComponentState
        return {
          ...state,
          components: init_root
        }
        case 'ADD_COMPONENT':
          let addComponentState = JSON.parse(JSON.stringify(state.components))
          let addComponentData = action.data ? JSON.parse(JSON.stringify(action.data)) : {}
          // add component into state components
            addComponentData.id = nanoid() // generates new id
            addComponentState[addComponentData.id] = addComponentData
          // add children into component's parent
          if (addComponentData.parentId) {
            if(addComponentState[addComponentData.parentId].children) {
              addComponentState[addComponentData.parentId].children.push(addComponentData)
            } else {
              addComponentState[addComponentData.parentId].children = [addComponentData]
            }
          }
        return {
          ...state,
          components: addComponentState
        }
      default:
        return state
    }
  }

export default components