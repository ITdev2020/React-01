import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import * as React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody)=> {
      dispatch(sendMessageCreator(newMessageBody))
    }
  }

}



// 'withAuthRedirect' - HOC
// let AuthRedirectComponent = withAuthRedirect(Dialogs);


// connect () () - second call function, which return for us fast call. Not is twice call function 'connect'.
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
) (Dialogs)

