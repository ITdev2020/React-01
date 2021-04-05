import React, {useState, useEffect} from "react";
import s from './ProfileInfo.module.css';


// hook - do not use hook in conditional, loops, etc.
const ProfileStatusWithHooks = (props) => {
  // 'useState' - hook - return array with two elements.
          // let stateWithSetState = useState(true);
          // let editMode = stateWithSetState[0];
          // let setEditMode = stateWithSetState[1];

  // from 'ProfileStatus.jsx' - local state:
  // we use destructuring assignment.
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  // 'useEffect' - runs after a component render.
  useEffect( ()=>{
    setStatus(props.status)
  // 'useEffect' - runs only on componentMount, because
  // [] - do not have dependencies. But we must use anyone dependencies.
  // }, [] )
  }, [props.status] )
  // 'useEffect' - something same as a state synchronization.
  // by [props.status] - in our case.

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }



  return (
    <div>
      { !editMode &&
      <div>
        <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
      </div>
      }

      {editMode &&
      <div>
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={status}/>
      </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks;
