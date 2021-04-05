import * as React from "react";
import s from './ProfileInfo.module.css';


// with 'class' React in memory create object, which can have local state.
// other side 'function' - not create object, and can't have local state.
class ProfileStatus extends React.Component {

  // local state
  state = {
    editMode: false,
    status: this.props.status
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
    //'setState' - asynchronous - execute after React get "setState" from all component in project:
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

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
      this.setState({
        status: e.currentTarget.value
      })
  }

  /*
componentDidUpdate(prevProps, prevState) {
    let a = this.state
    let b = this.props
    console.log('componentDidUpdate')
}
   */

componentDidUpdate(prevProps, prevState) {
 if (prevProps.status !== this.props.status)
  this.setState({
    status: this.props.status
  })
  console.log('componentDidUpdate')
}

  render() {
    console.log('render')
        // console.log(`"editMode inside render-"${this.state.editMode}`);
    return (
      <div>
        {!this.state.editMode &&
          <div>
            {/*<span onDoubleClick={ ()=> { alert(`"editMode"+ ${this.state.editMode}`) } }>{this.props.status}</span>*/}
            {/*<span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>*/}
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
          </div>
        }

        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange}
                   autoFocus={true}
                   onBlur={ this.deactivateEditMode.bind(this) }
                   value={this.state.status}/>
          </div>
        }
      </div>
    );
  };

}

export default ProfileStatus;
