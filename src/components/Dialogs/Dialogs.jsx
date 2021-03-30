import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {

  let state = props.dialogsPage


  // ' key={d.id} ' - React requirements that child must have a unique key.
  let dialogsElements = state.dialogs.map
  (d => <DialogItem id={d.id} key={d.id} name={d.name}/>)

  let messagesElements = state.messages.map
  (m => <Message message={m.message} key={m.id} />)

  let newMessageBody = state.newMessageBody




  let onSendMessageClick = () => {
    props.sendMessage();
  }

  // e - event
  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  // if user is not authorized, then redirect to login page:
  // alert(props.isAuth);
  // if (props.isAuth === false) return <Redirect to='/login'/>;

  // if we need comparing boolean with boolean value, then can write short:
  // if (!props.isAuth) return <Redirect to='/login'/>;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        {dialogsElements}

      </div>
      <div className={s.messages}>

        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMessageBody}
                         onChange={onNewMessageChange}
                         placeholder='Enter your message'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Dialogs;
