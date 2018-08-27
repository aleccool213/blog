import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Alec Brunelle`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        Written by <strong>Alec Brunelle</strong> who lives and works in
        Toronto, building useful things.{' '}
        <a href="http://eepurl.com/dfs9Db">
          Sign up for monthly programming insights
        </a>
      </p>
    )
  }
}

export default Bio
