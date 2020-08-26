import React from 'react'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import Welcome from '../components/Welcome'

class Exercises extends React.Component {
  state = {
    data: []
  }

  async componentDidMount() {
    await this.fetchExercises()
  }

  fetchExercises = async () => {
    let res = await fetch('http://localhost:8000/api/exercises')
    let data = await res.json()
    this.setState({
      data
    })
  }

  render() {
    return (
      <div>
        <Welcome 
          username="Alexander"
        />
        <ExerciseList 
          exercises={this.state.data}
        />
        <AddButton />
      </div>
    )
  }  
}

export default Exercises