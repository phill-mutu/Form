import React, {useState} from 'react'
import {} from 'react-router-dom'
import { connect} from 'react-redux'

import { addStudent } from '../actions/studentActions'

const initialState = {
  name: '',
  surname: '',
  email: '',
  dob: '',
  username: '',
  password: ''
}

const calculateAge = (birthday) => {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function Form (props) {
  const { dispatch } = props
  const [formData, setFormData] = useState (initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
      // console.log(formData)
    setFormData({
    name: '',
    surname: '',
    email: '',
    dob: '',
    username: '',
    password: '',
    age: ''})

    saveDetails(formData)
  }

  const handleChange = (e) => {
    // console.log(e.target.name)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      age: calculateAge(formData.dob) 
    })
  }

  const saveDetails = (formData) => {
    dispatch(addStudent(formData))
    // const {name, surname, email, dob, username, password, age} = formData
  }

  const { name, surname, email, dob, username, password, age} = formData

  return (
    <>

<h2>Enter Student Details:</h2>

<form onSubmit={handleSubmit}>
  <div>
  <label htmlFor= 'name'>First Name:</label>
  <input
        type='text'
        placeholder='First Name'
        id='name'
        name='name'
        value={name}
        onChange={handleChange}/>
  </div>
  <div>
  <label htmlFor= 'surname'>Surname:</label>
  <input
        type='text'
        placeholder='Surname'
        id='surname'
        name='surname'
        value={surname}
        onChange={handleChange}/>
  </div>
  <div>
  <label htmlFor= 'email'>Email:</label>
  <input
        type='text'
        placeholder='Email'
        id='email'
        name='email'
        value={email}
        onChange={handleChange}/>
  </div>
  <div>
  <label htmlFor= 'dob'>Date of Birth:</label>
  <input
        type='date'
        placeholder='Date of Birth'
        id='dob'
        name='dob'
        value={dob}
        onChange={handleChange}/>
  </div>
  <div>
  <label htmlFor= 'username'>Username:</label>
  <input
        type='text'
        placeholder='Username'
        id='username'
        name='username'
        value={username}
        onChange={handleChange}/>
  </div>
  <div>
  <label htmlFor= 'password'>Password:</label>
  <input
        type='text'
        placeholder='Password'
        id='password'
        name='password'
        value={password}
        onChange={handleChange}/>
  </div>

  <button>Submit</button>


</form>
</>
  )
}

export default connect()(Form)
