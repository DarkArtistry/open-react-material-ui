export const setRoot = (data) => ({
    type: 'SET_ROOT_COMPONENT',
    data: data
})

// add component to parent
export const addComponent = (data) => ({
    type: 'ADD_COMPONENT',
    data: data
})

// change parent
export const updateComponent = (data) => ({
    type: 'UPDATE_COMPONENT',
    data: data // data with new parent's id
})

export const selectComponent = (data) => ({
    type: 'SELECT_COMPONENT',
    data: data
})

export const updateSelectedComponent = (data) => ({
    type: 'UPDATE_SELECTED_COMPONENT',
    data: data
})
