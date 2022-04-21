import rootReducer from './reducers'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

export default function configureAppStore(preloadedState) {
  
  const store = configureStore({
    reducer: rootReducer,
  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}