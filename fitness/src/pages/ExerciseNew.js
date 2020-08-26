import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import '../components/styles/ExerciseNew.css'
import FatalError from './500'

class ExerciseNew extends React.Component {
  
  state = {
    form: {
      title: '',
      description: '',
      img: '',
      leftColor: '',
      rightColor: ''
    },
    loading: false,
    error: null
  }
  handleChange = e => {
    // console.log(`${e.target.name}: ${e.target.value}`)
    // let partialState = {}
    // partialState[e.target.name] = e.target.value
    // this.setState(partialState)
    
    //Con babel y ES7 contiene nuevas caracteristicas
    //Se sustituye lo de arriba con compile property name y el resultado es:
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    this.setState({
      loading: true
    })
    e.preventDefault()
    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
      }
      let res = await fetch('http://localhost:8000/api/exercises', config)
      let json = await res.json()
      this.setState({
        loading: false
      })
      this.props.history.push('/exercise')
    }catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
    console.log(this.state);
  }

  render() {
    if (this.state.error)
      return <FatalError />
    return (
      <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
          <Card 
            {...this.state.form}
          />
        </div>
        <div className="col-sm ExerciseNew_Card_Space">
          <ExerciseForm 
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            form={this.state.form}
          />
        </div>
      </div>
      
    )
  }  
}

export default ExerciseNew