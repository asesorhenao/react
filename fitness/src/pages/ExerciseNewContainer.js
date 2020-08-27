import React from 'react'
import '../components/styles/ExerciseNew.css'
import FatalError from './500'
import ExerciseNew from './ExercisesNew'
import url from '../config'

class ExerciseNewContainer extends React.Component {
  
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
      let res = await fetch(`${url}/exercises`, config)
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
    
    return <ExerciseNew 
              form={this.state.form}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
  }  
}

export default ExerciseNewContainer