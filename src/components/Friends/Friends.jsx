import React from 'react'
import './Friends.css'
import FriendTodo from './FriendTodo'

const Friends = () => {
  return (
    <div className='friends-w'>
      <span className='friends-title'>Friends</span>
      <FriendTodo />
    </div>
  )
}

export default Friends