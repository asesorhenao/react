import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Exercises from './Exercises'

const ExercisesContainer = () => {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        let res = await fetch('http://localhost:8000/api/exercises')
        let data = await res.json()
        setData(data)
        setLoading(false)
      }catch (error) {
        setLoading(false)
        setError(error)
      }
    }
    fetchExercises()
  }, [])

  if (loading) 
    return <Loading />
    
  if (error)
    return <FatalError />
    
  return <Exercises 
            username='Alexander'
            data={data}
          />
}

//Con este hook podemos utilizar un componente funcional en vez de una clase utilizando state, con useState

// class ExercisesContainer extends React.Component {
//   state = {
//     data: [],
//     loading: true,
//     error: null
//   }

//   async componentDidMount() {
//     await this.fetchExercises()
//   }

//   fetchExercises = async () => {
//     try {
//       let res = await fetch('http://localhost:8000/api/exercises')
//       let data = await res.json()
//       this.setState({
//         data,
//         loading: false
//       })
//     }catch (error) {
//       this.setState({
//         loading: false,
//         error
//       })
//     }
//   }

//   render() {
//     if (this.state.loading) 
//       return <Loading />
    
//     if (this.state.error)
//       return <FatalError />
    
//     return <Exercises 
//               username='Alexander'
//               data={this.state.data}
//             />
//   }  
// }

export default ExercisesContainer