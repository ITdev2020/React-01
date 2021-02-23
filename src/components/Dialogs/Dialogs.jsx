import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    // let dialogs = [
    //   {id: 1, name: 'Dimych'},
    //   {id: 2, name: 'Andrey'},
    //   {id: 3, name: 'Sveta'},
    //   {id: 4, name: 'Sasha'},
    //   {id: 5, name: 'Viktor'},
    //   {id: 6, name: 'Valera'}
    // ]
    //
    // let messages = [
    //   {id: 1, message: 'Hi'},
    //   {id: 2, message: 'How is your?'},
    //   {id: 3, message: 'Yahoo'},
    //   {id: 4, message: 'Yahoo'},
    //   {id: 5, message: 'Yahoo'},
    //   {id: 6, message: 'By'}
    // ]
    //
    //
    // let dialogsElements = dialogs.map(
    //   d => <DialogItem id={d.id} name={d.name}/>
    // )

  /*
[
  <DialogItem id={dialogs[0].id} name={dialogs[0].name}/>,
  <DialogItem id={dialogs[1].id} name={dialogs[1].name}/>,
  <DialogItem id={dialogs[2].id} name={dialogs[2].name}/>,
  <DialogItem id={dialogs[3].id} name={dialogs[3].name}/>,
  <DialogItem id={dialogs[4].id} name={dialogs[4].name}/>,
  <DialogItem id={dialogs[5].id} name={dialogs[5].name}/>
]
*/

    // let messagesElements = messages.map(
    //   m => <Message message={m.message}/>
    // )

  let dialogsElements = props.state.dialogs.map(
    d => <DialogItem id={d.id} name={d.name}/>
  )

  let messagesElements = props.state.messages.map(
    m => <Message message={m.message}/>
  )


    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>


          {dialogsElements}


          {/*<DialogItem id={dialogs[0].id} name={dialogs[0].name}/>*/}
          {/*<DialogItem id={dialogs[1].id} name={dialogs[1].name}/>*/}
          {/*<DialogItem id={dialogs[2].id} name={dialogs[2].name}/>*/}
          {/*<DialogItem id={dialogs[3].id} name={dialogs[3].name}/>*/}
          {/*<DialogItem id={dialogs[4].id} name={dialogs[4].name}/>*/}
          {/*<DialogItem id={dialogs[5].id} name={dialogs[5].name}/>*/}
        </div>
        <div className={s.messages}>


          {messagesElements}


          {/*<Message message={messages[0].message}/>*/}
          {/*<Message message={messages[1].message}/>*/}
          {/*<Message message={messages[2].message}/>*/}
          {/*<Message message={messages[3].message}/>*/}
          {/*<Message message={messages[4].message}/>*/}
          {/*<Message message={messages[5].message}/>*/}
        </div>
      </div>
    );
  }
;

export default Dialogs;
