import React from 'react'
import './Completion.css'
import ProgressBar from './ProgressBar'

const Completion = () => {
  return (
    <div className='completion-w'>
      <span>Completion</span> {/* Section Title  */}
      <ProgressBar /> {/* Degree Progress */}
    </div>
  )
}

export default Completion