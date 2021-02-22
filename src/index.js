import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";




let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 53},
  {id: 2, message: 'It\'s my first post', likesCount: 3},
  {id: 3, message: 'How is life?', likesCount: 6},
  {id: 4, message: 'Nothing', likesCount: 23},
  {id: 5, message: 'By', likesCount: 0},
]

let postsElements = posts.map(
// p => <Post message={p.message} likesCount={p.likesCount}/>
  p => <Post message={p.message} likesCount={p.likesCount}/>
)





let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'}
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your?'},
  {id: 3, message: 'Yahoo'},
  {id: 4, message: 'Yahoo'},
  {id: 5, message: 'Yahoo'},
  {id: 6, message: 'By'}
]

let dialogsElements = dialogs.map(
  d => <DialogItem id={d.id} name={d.name}/>
)

let messagesElements = messages.map(
  m => <Message message={m.message}/>
)






ReactDOM.render(
  <React.StrictMode>
    <App
      postsElements={postsElements}
      dialogsElements={dialogsElements}
      messagesElements={messagesElements}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
