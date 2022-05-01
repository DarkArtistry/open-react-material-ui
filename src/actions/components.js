export const setRoot = (data) => ({
    type: 'SET_ROOT_COMPONENT',
    data: data
})

export const addComponent = (data) => ({
    type: 'ADD_COMPONENT',
    data: data
})

export const selectComponent = (data) => ({
    type: 'SELECT_COMPONENT',
    data: data
})

export const updateSelectedComponent = (data) => ({
    type: 'UPDATE_SELECTED_COMPONENT',
    data: data
})