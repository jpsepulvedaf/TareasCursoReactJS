import React from 'react'
import Course  from './Course'
import CourceAddForm from './CourseAddForm'

const CoursesList = ( props ) => (
  <div>
    <CourceAddForm
        onAddCourse={props.onAddCourse}
    />
    <ul>
      {
        props.courses.map(course => (
          <Course
            key={course.id}
            id={course.id}
            name={course.name}
            teacher={course.teacher}
          />
        ))
      }
    </ul>
  </div>
)

export default CoursesList