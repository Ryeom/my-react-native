import { createStore } from "redux"
import modules from "./modules"

const configure = () => {
  //const store = createStore(modules)
  //redux-devtools (chrome extention)
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(modules, devTools)
  return store
}

export default configure()
