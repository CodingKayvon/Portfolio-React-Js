import React from 'react'
import './Profile.css'
import { FaUserCircle } from "react-icons/fa";


const Profile = () => {
  return (
    <div className='profile-w'>
      <span>Profile</span>

      <div className='user-w'>
        <div><FaUserCircle fontSize={130}/></div>

        <div className='userInfo'>
          <span>Kayvon Washington</span>
          <span>@CodingKayvon</span>
        </div>
       
      </div>

    </div>
  )
}

export default Profile