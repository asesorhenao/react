import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

//Este componente se va a encargar de realizar la presentación
const ExerciseNew = ({form, onChange, onSubmit}) => (
  <div className="ExerciseNew_Lateral_Spaces row">
    <div className="col-sm ExerciseNew_Card_Space">
      <Card 
        {...form}
      />
    </div>
    <div className="col-sm ExerciseNew_Card_Space">
      <ExerciseForm 
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
      />
    </div>
  </div>
)

export default ExerciseNew