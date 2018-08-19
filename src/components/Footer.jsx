import React from 'react'
import Disqus from 'disqus-react'

export const Footer = ({ url, identifier, title }) => {
  const disqusShortname = 'coffee-driven-development'
  const disqusConfig = {
    url: url,
    identifier: identifier,
    title: title,
  }
  return (
    <span>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </span>
  )
}
