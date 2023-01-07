import React, {useState} from 'react'
import { Route } from 'react-router-dom'

import Form from './Form'
import StudentsView from './StudentsView'


function App () {

  return (
    <>
      <div>
        <h2>Student Details</h2>
        <Route path='/' component={Form} />
        <Route path='/students' component={StudentsView} />

      </div>
    </>
  )
}


export default App