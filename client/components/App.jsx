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
        <Route path='/' component={Form} />
        {/* <Route path='/' component={StudentsView} /> */}

        

      </div>
    </>
  )
}


export default connect()(App)