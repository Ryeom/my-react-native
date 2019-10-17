import { createAction, handleActions } from "redux-actions"

const PLUS = "counter/PLUS"
const MINUS = "counter/MINUS"

export const setPlus = createAction(PLUS)
export const setMinus = createAction(MINUS)

const initialState = { num: 0 }

const counter = handleActions(
  //여기를 거쳐서 나가는거거든?
  //상태가 변해서
  {
    [PLUS]: (state, action) => {
      console.log(`뿌라쓰 `, action)

      return {
        num: state.num + 1, //+1 or -1 이런식으로?
      }
    },
    [MINUS]: (state, action) => ({
      num: state.num - 1,
    }),
  },
  initialState,
)
//여기 리덕스

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
