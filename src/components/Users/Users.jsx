// import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div className={styles.users}>
    {
      props.users.map(u =>
        <div key={u.id}>

          <span>
            <div datatype='image'>
              <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
              </NavLink>
            </div>
            <div datatype='follUnfollow'>
              {/* ternary operator */}
              {u.followed
                // followingInProgress is array. Method 'some' - if any element === u.id, then 'true'
                ? <button disabled={props.followingInProgress.some( id => id === u.id )} onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    // withCredentials: true,
                    headers: {
                      'API-KEY': '9ba50d04-a62e-4b79-81da-db22d5a24da9'
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });

                }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some( id => id === u.id )} onClick={() => {
                  props.toggleFollowingProgress(true, u.id);
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    // withCredentials: true,
                    headers: {
                      'API-KEY': '9ba50d04-a62e-4b79-81da-db22d5a24da9'
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });

                }}>Follow</button>
              }
            </div>
            <div>userId: {u.id}</div>
            <div>name: {u.name}</div>
            <div>status: {u.status}</div>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>

        </div>)
    }

    <div datatype='pagination'>
      {pages.map(p => {
        return <span className={props.currentPage === p && styles.selectedPage}
                     onClick={(e) => {
                       props.onPageChanged(p)
                     }}>_{p}_</span>
      })}

    </div>

  </div>;

}

export default Users