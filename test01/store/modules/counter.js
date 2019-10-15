import { createAction, handleActions } from "redux-actions"

const PLUS = "counter/PLUS"
const MINUS = "counter/MINUS"

export const setPlus = createAction(PLUS)
export const setMinus = createAction(MINUS)

const initialState = { num: 0 }

const counter = handleActions(
  {
    [PLUS]: (state, action) => ({
      num: state.num + 1,
    }),
    [MINUS]: (state, action) => ({
      num: state.num - 1,
    }),
  },
  initialState,
)
/////////////////////////////////////////////////////////////////
// const counter = (state, action) => {
//   switch (action.type) {
//     case "counter/PLUS":
//       return { num: state.num + 1 }
//     case "counter/MINUS":
//       return { num: state.num - 1 }
//     default:
//       return state
//   }
// }
export default counter
