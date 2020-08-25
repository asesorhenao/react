// const element = document.createElement('h1');
// element.innerHTML = 'Hola React';
// const container = document.getElementById('root');
// container.appendChild(element);

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Alexander',
  lastName: 'Henao'
}

function getName(user) {
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user) {
  if (user) {
    return <h1>Hola {getName(user)}</h1>
  }
  return<h1>Hola Extraño</h1>
}
const name = 'Alexander'
const element = (
  <div>
    <h1>Hola {name} React...{getName(user)}</h1>
    {getGreeting(user)}
  </div>
)
const container = document.getElementById('root')

ReactDOM.render(element, container)