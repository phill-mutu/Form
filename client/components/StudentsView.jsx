import React from "react"
import { connect } from 'react-redux'

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
                                      <td>{student.dob}</td>
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