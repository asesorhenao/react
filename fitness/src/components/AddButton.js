import React from 'react'
import buttonImg from '../images/add.png'
import './styles/AddButton.css'
import { Link } from 'react-router-dom'


const AddButton = () => (
  <Link to='/exercise/new'>
    <img src={buttonImg} className="Fitness-Add" alt="exercise" />
  </Link>
)    

export default AddButton