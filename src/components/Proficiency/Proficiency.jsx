import React from 'react'
import './Proficiency.css'
import ReactProgressBar from './ProgressBars/ReactProgressBar'
import CInProgressBar from './ProgressBars/CIncrementProgressBar'
import JsProgressBar from './ProgressBars/JSProgressBar'
import JavaProgressBar from './ProgressBars/JavaProgressBar'
import HtmlProgressBar from './ProgressBars/HtmlProgressBar'
import CssProgressBar from './ProgressBars/CssProgressBar'

const Proficiency = () => {
  return (
    <div className='proficiency-w'>
      <span>Proficiency</span>

      <div className='lang-w'>
        <div className='react-w pb-w'>
          <ReactProgressBar />
          <span>React</span>
        </div>

        <div className='cIncrement-w pb-w'>
          <CInProgressBar />
          <span>C++</span>
        </div>

        <div className='js-w pb-w'>
          <JsProgressBar />
          <span>JavaScript</span>
        </div>

        <div className='java-w pb-w'>
          <JavaProgressBar />
          <span>Java</span>
        </div>

        <div className='html-w pb-w'>
          <HtmlProgressBar />
          <span>HTML</span>
        </div>
        
        <div className='css-w pb-w'>
          <CssProgressBar />
          <span>CSS</span>
        </div>
      </div>
      
    </div>
  )
}

export default Proficiency