import {
  sendMessageCreator, updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import * as React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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


// 'withAuthRedirect' - HOC
let AuthRedirectComponent = withAuthRedirect(Dialogs);


// connect () () - second call function, which return for us fast call. Not is twice call function 'connect'.
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer;
