import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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

  //action - object, which at minimum have 'type'. dispatch - 'send'.
  dispatch(action) {  // { type: 'ADD-POST' }, for example.

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}



// API - application program interface

export default store

// we can view state value in browser console:
window.store = store

// store - OOP
