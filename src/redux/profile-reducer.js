import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 53},
    {id: 2, message: 'It\'s my first post', likesCount: 3},
    {id: 3, message: 'How is life?', likesCount: 6},
    {id: 4, message: 'Nothing', likesCount: 23},
    {id: 5, message: 'By', likesCount: 0}
  ],
  newPostText: 'post by Igor',
  profile: null,
  status: ""
}

//Reducer - pure function
// if state not defined (on start), then state = initialState.
const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {...state, newPostText: action.newText}
    }

    case SET_STATUS: {
      return {...state, status: action.status}
    }

    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }

    default:
      return state;

  }

}

//ActionCreator
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

//thunkCreator
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
}

export default profileReducer;