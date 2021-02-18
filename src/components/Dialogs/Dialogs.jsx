import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}


const Dialogs = (props) => {


  let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
]


  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your?'},
    {id: 3, message: 'Yahoo'},
    {id: 4, message: 'Yahoo'},
    {id: 5, message: 'Yahoo'},
    {id: 6, message: 'By'}
  ]


return (
  <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
      <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
      <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
      <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
      <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
      <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>
    </div>
    <div className={s.messages}>
      <Message message={messagesData[0].message}/>
      <Message message={messagesData[1].message}/>
      <Message message={messagesData[2].message}/>
      <Message message={messagesData[3].message}/>
      <Message message={messagesData[4].message}/>
      <Message message={messagesData[5].message}/>
    </div>
  </div>
);
}
;

export default Dialogs;
