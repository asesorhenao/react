import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
  <React.Fragment>
    {
     exercises.map((exercise) => {
        return (
          <Card
            key={exercise.id}
            {...exercise}
            // title={exercise.title}
            // description={exercise.description}
            // img={exercise.img}
            // leftColor={exercise.leftColor}
            // rightColor={exercise.rightColor}
          />
        )    
      })
    }
  </React.Fragment>
)

export default ExerciseList