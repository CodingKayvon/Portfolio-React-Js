import React, { useEffect, useState } from 'react'
import './ProgressBar.css'

const ProgressBar = () => {
  const [filled, setFilled] = useState(0); {/* Initial Value 0 */}
  const [loading, isLoading] = useState(false); {/* Dont Load Initially */}

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", isLoading(true)); {/* On Window Load/Refresh -> Begin Loading */}
    if(filled < 60 && loading){ {/* Fill amount is less than target amount && still loading to target amount */}

     
      setTimeout(() => setFilled(prev => prev+=4), 100) //Increase Fill amount by += 4 until 100% of target
    }
  }, [filled, loading]);


  return (
    <div className='body'>
      <div className='progressbar'>

        {/* Progress Fill  */}
        <div style={{ 
          height: "100%",
          width: `${filled}%`,
          backgroundColor: "var(--mainTheme)",
          transition: "width 0.4s"
        }}>
        </div>

        <span className='progressbarpercentage'>
          {filled}%
        </span>

      </div>
    </div>
  )
}

export default ProgressBar