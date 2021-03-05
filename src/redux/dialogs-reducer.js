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
const dialogsReducer = (state=initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({id: 6, message: body})
      return state;
    default:
      return state;
  }

}

//ActionCreator
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default dialogsReducer;