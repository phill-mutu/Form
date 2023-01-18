import React from "react"
import { connect } from 'react-redux'

function reverseDateOfBirth (dob) {
  const arr = dob.split('')
  const newArr = [arr[8],arr[2],arr[7],arr[5],arr[6],arr[4],arr[0],arr[1],arr[2],arr[3]]
    
  return newArr
}

function StudentsView (props) {
  const { students } = props

    return (
      <>
        <div>
          <h2>Student Details DB:</h2>
        </div>

        <div>
        <table>
          <tbody>
            <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Username</th>
            <th>Password</th>
            <th>Age</th>
            </tr>

            {students.map(student => <tr key={student.id}>
                                      <td>{student.name}</td>
                                      <td>{student.surname}</td>
                                      <td>{student.email}</td>
                                      <td>{reverseDateOfBirth(student.dob)}</td>
                                      <td>{student.username}</td>
                                      <td>{student.password}</td>
                                      <td>{student.age}</td>

                                    </tr>)} 
          </tbody>

      </table>
    </div>

      </>
    )
  }
  
  function mapReduxToProps(globalState) {
    return{
      students: globalState.students
    }
  }
  
  export default connect(mapReduxToProps)(StudentsView)