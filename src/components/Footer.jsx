import React from 'react'
import DisqusThread from './DisqusThread'

export const Footer = ({ url, identifier, title }) => {
  return (
    <span>
      <h2>
        ❤️ If you found this article useful, consider <a>subbing</a> for more in
        the future and <a>tweeting</a> it out. ❤️
      </h2>
      <span>
        <DisqusThread id={identifier} title={title} path={url} />
      </span>
    </span>
  )
}
