import {rerenderEntireTree} from "../render";

let state = {

  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 53},
      {id: 2, message: 'It\'s my first post', likesCount: 3},
      {id: 3, message: 'How is life?', likesCount: 6},
      {id: 4, message: 'Nothing', likesCount: 23},
      {id: 5, message: 'By', likesCount: 0}
    ]
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
      {id: 5, message: 'Yahoo'},
      {id: 6, message: 'By'}
    ]
  },

  sidebar: {}
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 6,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}


export default state