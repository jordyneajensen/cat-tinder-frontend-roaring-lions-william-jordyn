import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <>
      <div className='homeHeading'>
        <h2>Roar Thru The Jungle!</h2>
        <p>Let's go on an adventure to learn more about these beautiful big cats and their unique personalities. 
          You can even create your own big cat profile to add!</p>
          <p>Here at Roaring Lions we strive to create an engaging environment in order to raise awareness for these beautiful endangered species.</p>
        <NavLink to={`/bigcatindex`}>
          <Button classname="homebutton">Go Explore!</Button>
        </NavLink>
      </div>
      </>
    )
  }
}

export default Home
