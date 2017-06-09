import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './'
/**
 * ## configureStore
 * @param {Object} the initial state.
 */
export default function configureStore (initialState) {
  const middlewares = [
    applyMiddleware(thunk)
  ]
  if (__DEV__) { // eslint-disable-line no-undef
    if (global.reduxNativeDevTools) middlewares.push(global.reduxNativeDevTools())
  }
  const enhancer = compose(...middlewares)
  return createStore(reducer, initialState, enhancer)
}
