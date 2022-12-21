import React, {useState} from 'react'

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

function App () {

  const [formData, setFormData] = useState (initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('name = ' + formData.name)
    console.log('surname = ' + formData.surname)
    console.log('email = ' + formData.email)
    console.log('dob = ' + formData.dob)
    console.log('username = ' + formData.username)
    console.log('password = ' + formData.password)
    console.log('age = ' + calculateAge(formData.dob))
    setFormData({
    name: '',
    surname: '',
    email: '',
    dob: '',
    username: '',
    password: '',
    age: ''})
    alert('Information submitted')
  }
  

  const handleChange = (e) => {
    // console.log(e.target.name)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const { name, surname, email, dob, username, password} = formData

  return (
    <>
      <div>
        <h2>Student Details</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>First Name:</label>
            <input
              type='text'
              placeholder='First Name'
              id='name'
              name='name'
              value={name}
              onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='surname'> Surname:</label>
            <input
              type='text'
              placeholder='Surame'
              id='surname'
              name='surname'
              value={surname}
              onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='email'> Email:</label>
            <input
              type='text'
              placeholder='Email'
              id='email'
              name='email'
              value={email}
              onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='dob'> Date of Birth:</label>
            <input
              type='date'
              placeholder='Date of Birth'
              id='dob'
              name='dob'
              value={dob}
              onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='username'> Username:</label>
            <input
              type='text'
              placeholder='Username'
              id='username'
              name='username'
              value={username}
              onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='password'> Password:</label>
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

export default App