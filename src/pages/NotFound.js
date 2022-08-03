import React, { Component } from 'react'
import notfoundlion from '../assets/notfoundlion.jpg'

class NotFound extends Component {
  render() {
    return (
      <>
      <div className="not-found">
        <h1>Being Brave Doesn't Mean You Go looking For Trouble -- Mufasa</h1>
        <img className="lion-not-found" src={notfoundlion}/>
      </div>
      </>
    )
  }
}

export default NotFound