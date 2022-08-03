import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <h2 className='homeHeading'>Find Your Pawwfect Mate</h2>
        <NavLink to={`/bigcatindex`}>
          <button>Big Cats!</button>
        </NavLink>
      </>
    )
  }
}

export default Home