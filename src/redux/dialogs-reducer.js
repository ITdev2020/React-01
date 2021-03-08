const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

// if state not defined (on start), then state = initialState.
const dialogsReducer = (state = initialState, action) => {

  // '...state' - already have 'messages:', but this only link (not copy).
  // we write second line 'messages:', and this line last in object, then this line reWrite
  // link to 'messages:' from first line, with copy of object 'messages:'.

  // let stateCopy = {
  //   ...state,
  // messages: [...state.messages]
  // }


  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }

    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}]
      }
    // stateCopy.newMessageBody = ''
    // stateCopy.messages.push({id: 6, message: body})

    default:
      return state;
  }

}

//ActionCreator
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer;