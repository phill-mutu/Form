import React, {useEffect, useState} from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Form from './Form'
import StudentsView from './StudentsView'

import { getAllStudentsThunk } from '../actions/studentActions'

function App ({ dispatch }) {

  useEffect(() => {
    dispatch(getAllStudentsThunk())
  }, [])

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


export default connect()(App)