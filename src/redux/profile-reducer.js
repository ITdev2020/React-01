const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 53},
    {id: 2, message: 'It\'s my first post', likesCount: 3},
    {id: 3, message: 'How is life?', likesCount: 6},
    {id: 4, message: 'Nothing', likesCount: 23},
    {id: 5, message: 'By', likesCount: 0}
  ],
  newPostText: 'post by Igor'
}

// if state not defined (on start), then state = initialState.
const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {

      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0
      }
      let stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      // stateCopy.posts.push(newPost)
      stateCopy.newPostText = ''
      return stateCopy;

    }
    case UPDATE_NEW_POST_TEXT: {

      let stateCopy = {...state}
      stateCopy.newPostText = action.newText
      return stateCopy;

    }
    default:
      return state;

  }

}

//ActionCreator
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;