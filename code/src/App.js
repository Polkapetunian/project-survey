import React from 'react'
import Survey from './Survey'
import Result from './Result'

const App = () => {
  return (
    <div className="surveyContainer">
      <h1 className="h1">My Business Card Generator</h1>
      <Survey/>
      <Result/>
    </div>
  )


  }
export default App;
