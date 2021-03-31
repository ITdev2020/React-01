import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

  let state = props.dialogsPage


  // ' key={d.id} ' - React requirements that child must have a unique key.
  let dialogsElements = state.dialogs.map
  (d => <DialogItem id={d.id} key={d.id} name={d.name}/>)

  let messagesElements = state.messages.map
  (m => <Message message={m.message} key={m.id} />)

  let newMessageBody = state.newMessageBody


  // let addNewMessage = () => {
  //   alert('addNewMessage')
  // }
  //
  // let addNewMessage = (values) => {
  //   alert(values.newMessageBody)
  // }

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  // if user is not authorized, then redirect to login page:
  // alert(props.isAuth);
  // if (props.isAuth === false) return <Redirect to='/login'/>;

  // if we need comparing boolean with boolean value, then can write short:
           if (!props.isAuth) return <Redirect to='/login'/>;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );

};


export default Dialogs;
