import React from 'react'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import Welcome from '../components/Welcome'

const Exercises = ({username, data}) => (
  <React.Fragment>
    <Welcome 
      username={username}
    />
    <ExerciseList 
      exercises={data}
    />
    <AddButton />
  </React.Fragment>
)

export default Exercises