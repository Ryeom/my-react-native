import { createStore, applyMiddleware } from "redux"
import rootReducer from "./modules"
import { composeWithDevTools } from "redux-devtools-extension"
import ReduxThunk from "redux-thunk"

const configure = () => {
  //const store = createStore(modules)
  //redux-devtools (chrome extention)
  // const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(rootReducer,applyMiddleware(ReduxThunk)) //,applyMiddleware(ReduxThunk)
  return store
}

export default configure()
