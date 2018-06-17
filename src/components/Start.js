import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Start.css'

export default class Start extends PureComponent {
  render() {
    return (
      <div>
        <h2>Train to become a great brute force hacker!</h2>
        <div className="Beginning">
          <h1 className="Start"><Link to={ `/hangman` }>START</Link></h1>
        </div>
      </div>
    )
  }
}
