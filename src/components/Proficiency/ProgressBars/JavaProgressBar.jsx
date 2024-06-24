import React from 'react'
import { useEffect, useState } from 'react'
import './JavaProgressBar.css'


  const JavaProgressBar = () => {
    const [filled, setFilled] = useState(0); //inital state at 0
    const [loading, isLoading] = useState(false); //not loaded 
  
    useEffect(() => {
      window.addEventListener("DOMContentLoaded", isLoading(true)) //on window open/refresh
      if(filled < 15 && loading){ //if less than target amount and still loading 
  
       
        setTimeout(() => setFilled(prev => prev+=1), 100) // increase progress bar by prev += 4
      }
    }, [filled, loading]);
  
  return (
    <div className='java-body'>
      <div className='java-progressbar'>

      <span className='java-progressbarpercentage'>
          {filled}%
        </span>

        {/* Fill Progress Bar */}
        <div style={{
          height: `${filled}%`,
          width: "100%",
          backgroundColor: "var(--mainTheme)",
          transition: "height 0.4s"
        }}>
        </div>

      </div>
    </div>
  )
}

export default JavaProgressBar