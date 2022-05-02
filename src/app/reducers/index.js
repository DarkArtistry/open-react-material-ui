import { combineReducers } from 'redux'
import components from './components'
import app from './app'

const mainApp = combineReducers({
    app,
    components,
  })

export default mainApp