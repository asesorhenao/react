import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseNew extends React.Component {
  
  state = {
    form: {
      title: '',
      description: '',
      img: '',
      leftColor: '',
      rightColor: ''
    }
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
  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <Card 
            {...this.state.form}
          />
        </div>
        <div className="col-sm">
          <ExerciseForm 
            onChange={this.handleChange}
            form={this.state.form}
          />
        </div>
      </div>
      
    )
  }  
}

export default ExerciseNew