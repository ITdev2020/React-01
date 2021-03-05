import {
  sendMessageCreator, updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage


  // let dialogsElements = state.dialogs.map
  // (d => <DialogItem id={d.id} name={d.name}/>)

  // let messagesElements = state.messages.map
  // (m => <Message message={m.message}/>)

  // let newMessageBody = state.newMessageBody


  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );

}

export default DialogsContainer;
