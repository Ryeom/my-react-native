import { createAction, handleActions } from "redux-actions"
import { pender } from "redux-pender"
import * as api from "../../lib/api"

const GET_FEEDS = "home/GET_FEEDS"
const GET_FOLLOWINGS = "home/GET_FOLLOWINGS"
const GET_ALL = "home/GET_ALL"

export const getFeeds = () => createAction(GET_FEEDS, api.fetchFeeds())
export const getFollowings = () => createAction(GET_FOLLOWINGS, api.fetchFollowing())
export const getAll = () => createAction(GET_ALL)

const initializeState = {
  feeds: [],
  followings: [],
}

export default handleActions(
  {
    [GET_FOLLOWINGS]: (state, action) => {
      console.log("GET_FOLLOWINGS", action.payload)
      return state.set("followings")
    },
    ...pender({
      type: GET_FEEDS,
      onSuccess: (state, action) => {
        console.log("GET_FEEDS", action.payload)
        return state.set("feeds")
      },
    }),
    ...pender({
      type: GET_FOLLOWINGS,
      onSuccess: (state, action) => {
        console.log("GET_FOLLOWINGS", action.payload)
        return state.set("followings")
      },
    }),
    // [GET_ALL]: (state, action) => {
    //   return { feeds: api.fetchFollowing() }
    // },
  },
  initializeState,
)
