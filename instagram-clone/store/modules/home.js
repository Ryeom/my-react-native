import { createAction, handleActions } from "redux-actions"
import * as api from "../../lib/api"

const GET_FEEDS = "home/GET_FEEDS"
const GET_FOLLOWINGS = "home/GET_FOLLOWINGS"
const GET_ALL = "home/GET_ALL"

export const getFeeds = () => createAction(GET_FEEDS, api.fetchFeeds)
export const getFollowings = () => createAction(GET_FOLLOWINGS, api.fetchFollowing)
export const getAll = () => createAction(GET_ALL)

const initializeState = {

  feeds: [],
  followings: [],
}

export default handleActions(
  {
    
    [GET_FEEDS]: (state, action) => {
      console.log(`여기도1111`, action.payload)

      console.log(`여기도`)
      return { ...state, feeds: "히히" }
    },
    // [GET_FOLLOWINGS]: (state, action) => {
    //   const { data } = action.payload
    //   console.log(`여기도`, data)
    //   return { ...state, followings: data }
    // },
  },
  initializeState,
)
