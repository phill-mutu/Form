import React from "react"
import { connect } from 'react-redux'

function StudentsView (props) {
  const { students } = props
  
    return (
      <>
        <div>
          <h2>Student Details DB:</h2>

          <ul>
            {students.map(student => <li key={student.id}>{student.name}
                                                          {student.surname}
                                                          {student.email}
                                                          {student.dob}
                                                          {student.username}
                                                          {student.password}
                                                          {student.age}</li>)}
          </ul>
         
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