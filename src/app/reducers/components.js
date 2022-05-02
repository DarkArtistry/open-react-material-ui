import { nanoid } from '@reduxjs/toolkit'

function components(state ={}, action) {
    switch (action.type) {
      case 'SET_ROOT_COMPONENT':
          let init_root = {}
          const setRootComponentState = JSON.parse(JSON.stringify(action.data))
          console.log('setRootComponentState : ', setRootComponentState);
          init_root[setRootComponentState ? setRootComponentState.id : 'root'] = setRootComponentState
          console.log('init_root : ', init_root);
        return {
          ...state,
          components: init_root
        }
        case 'ADD_COMPONENT':
          let addComponentState = JSON.parse(JSON.stringify(state.components))
          let addComponentData = action.data ? JSON.parse(JSON.stringify(action.data)) : {}
          console.log('addComponentData : ', addComponentData);
          // add component into state components
          addComponentData.id = nanoid() // generates new id
          addComponentState[addComponentData.id] = addComponentData
          // add children into component's parent AND ensure that it is not an INFINITE LOOP
          if (addComponentData.parentId) {
            // Inifite loop check, incomplete
            if (addComponentData.children && addComponentData.children.includes(addComponentData.parentId)) {
              console.log('INFINITE LOOP DETECTED');
              return {
                ...state
              }
            }
            console.log('addComponentState: ', addComponentState);
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
        case 'UPDATE_COMPONENT':
          console.log('~@#~#~!@#!@!@#!@# UPDATE COMPONENT');
          let updateComponentState = JSON.parse(JSON.stringify(state.components))
          console.log('updateComponentState : ', updateComponentState);
          let updateComponentData = action.data ? JSON.parse(JSON.stringify(action.data)) : {}
          console.log('updateComponentData : ', updateComponentData);
          const oldComponentData = updateComponentState[updateComponentData.id]
          console.log('oldComponentData : ', oldComponentData);
          const oldComponentParentId = oldComponentData.parentId || ""
          const newComponentParentId = updateComponentData.parentId
          updateComponentState[updateComponentData.id] = updateComponentData
          console.log('oldComponentParentId @@@@@ : ', oldComponentParentId);
          console.log('newComponentParentId @@@@@: ', newComponentParentId);
          // update old parent to remove child
          if(updateComponentState[oldComponentParentId]) {
            console.log('OLD PARENT1 : ', updateComponentState[oldComponentParentId]);
            updateComponentState[oldComponentParentId].children = updateComponentState[oldComponentParentId].children.filter((childId) => {
              return childId !== updateComponentData.id
            })
            console.log('OLD PARENT2 : ', updateComponentState[oldComponentParentId]);
          }
          // update new parent
          if(updateComponentState[newComponentParentId]) {
            console.log('NEW PARENT1 : ', updateComponentState[newComponentParentId]);
            updateComponentState[newComponentParentId].children.push(updateComponentData.id)
            console.log('NEW PARENT2 : ', updateComponentState[newComponentParentId]);
          }
          // update component
          updateComponentState[updateComponentData.id] = {...oldComponentData,...updateComponentData}
          return {
            ...state,
            components: updateComponentState
          }
        case 'SELECT_COMPONENT':
          console.log('selectedComponent : ', action.data);
          return {
            ...state,
            selectedComponent: action.data ? JSON.parse(JSON.stringify(action.data)) : {}
          }
        case 'UPDATE_SELECTED_COMPONENT':
          console.log('UPDATE_SELECTED_COMPONENT!!!!!!!!!!!!!!');
          let componentToUpdate = action.data ? JSON.parse(JSON.stringify(action.data)) : {}
          let updateSelectedComponentState = JSON.parse(JSON.stringify(state.components))
          updateSelectedComponentState[componentToUpdate.id] = componentToUpdate
          console.log('componentToUpdate :', componentToUpdate);
          console.log('selectedComponent :', state.selectedComponent);
          return {
            ...state,
            selectedComponent: componentToUpdate,
            components: updateSelectedComponentState
          }
      default:
        return state
    }
  }

export default components