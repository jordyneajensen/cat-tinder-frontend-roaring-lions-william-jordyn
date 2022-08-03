import React, { Component } from 'react'
import notfoundlion from '../assets/notfoundlion.png'

class NotFound extends Component {
  render() {
    return (
      <>
      <div className="not-found">
        <img className="lion-not-found" src={notfoundlion}/>
      </div>
      </>
    )
  }
}

export default NotFound