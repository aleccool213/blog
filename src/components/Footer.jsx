import React from 'react'
import DisqusThread from './DisqusThread'

export const Footer = ({ url, identifier, title }) => {
  return (
    <span>
      <DisqusThread id={identifier} title={title} path={url} />
    </span>
  )
}
