import { nanoid } from '@reduxjs/toolkit'

function app(state={preview: false}, action) {
    switch (action.type) {
      case 'TOGGLE_PREVIEW':
          console.log('TOGGLE_PREVIEW !!');
          console.log('state : ', state);
        return {
          ...state,
          preview: !state.preview,
        }
      default:
        return state
    }
  }

export default app