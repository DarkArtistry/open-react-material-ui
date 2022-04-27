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
          // add children into component's parent AND ensure that it is not an INFINITE LOOP
          console.log('ADDING COMPONENT1');
          console.log(addComponentData);
          if (addComponentData.parentId) {
            // Inifite loop check
            if (addComponentData.children && addComponentData.children.includes(addComponentData.parentId)) {
              console.log('INFINITE LOOP DETECTED');
              return {
                ...state
              }
            }
            if(addComponentState[addComponentData.parentId].children) {
              console.log('have children');
              addComponentState[addComponentData.parentId].children.push(addComponentData.id)
            } else {
              console.log('no children');
              addComponentState[addComponentData.parentId].children = [addComponentData.id]
            }
          }
          console.log('ADDING COMPONENT2');
          console.log(addComponentState);
        return {
          ...state,
          components: addComponentState
        }
        case 'SELECT_COMPONENT':
          return {
            ...state,
            selectedComponent: action.data ? JSON.parse(JSON.stringify(action.data)) : {}
          }
      default:
        return state
    }
  }

export default components