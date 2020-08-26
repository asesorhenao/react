import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'

class Card extends React.Component {
  render() {
    const {title, description, img, leftColor, rightColor} = this.props
    return (
      <div 
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56ccf2'}, ${rightColor || '#2f80ed'})`
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={img || emptyImg} alt="Image" className="float-right" />
            </div> 
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div> 
          </div>
        </div>
      </div>
      
    ) 
  }
}

export default Card