const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
  _state: {

    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 53},
        {id: 2, message: 'It\'s my first post', likesCount: 3},
        {id: 3, message: 'How is life?', likesCount: 6},
        {id: 4, message: 'Nothing', likesCount: 23},
        {id: 5, message: 'By', likesCount: 0}
      ],
      newPostText: 'post by Igor'
    },

    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your?'},
        {id: 3, message: 'Yahoo'},
        {id: 4, message: 'Yahoo'},
        {id: 5, message: 'By'}
      ],
      newMessageBody: ''
    },

    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer - (pattern) - button.addEventListener
  },

  //action - object. dispatch - 'send'.
  dispatch(action) {  // { type: 'ADD-POST' }, for example.
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body
      // reRender page
      this._callSubscriber(this._state)

    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = ''
      this._state.dialogsPage.messages.push({id: 6, message: body})
      // reRender page
      this._callSubscriber(this._state)
    }
  }
}

//ActionCreator
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const UpdateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



// API - application program interface

export default store

// we can view state value in browser console:
window.store = store

// store - OOP
