import {
  sendMessageCreator, updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    // is user authorized?
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body)=> {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: ()=> {
      dispatch(sendMessageCreator())
    }
  }

}


// connect () () - second call function, which return for us fast call. Not is twice call function 'connect'.
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;
