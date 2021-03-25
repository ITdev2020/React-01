import * as React from "react";
import s from './ProfileInfo.module.css';
// import Preloader from "../../common/Preloader/Preloader";


// with 'class' React in memory create object, which can have local state.
// other side 'function' - not create object, and can't have local state.
class ProfileStatus extends React.Component {
  // local state
  state = {
    editMode: false,
    //  for example:
    title: 'This is title'
  }

  /*
    activateEditMode = () => {
      // alert('editMode');
      debugger
      this.state.editMode = true;
    }
   */


  activateEditMode = () => {
    // alert('editMode');
        // console.log(`"editMode before-"${this.state.editMode}`);
        console.log("this-", this);
    //'setState' - asynchronous - execute after finish this method:
    this.setState({
      editMode: true
    })
        // console.log(`"editMode after-"${this.state.editMode}`);

    /*
    this.state.editMode = true;
    //'forceUpdate' - we must try don't use this method.
    this.forceUpdate()
     */
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
        // console.log(`"editMode inside render-"${this.state.editMode}`);
    return (
      <div>
        {!this.state.editMode &&
          <div>
            {/*<span onDoubleClick={ ()=> { alert(`"editMode"+ ${this.state.editMode}`) } }>{this.props.status}</span>*/}
            {/*<span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>*/}
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }

        {this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.props.status}/>
          </div>
        }
      </div>
    );
  };

}

export default ProfileStatus;
