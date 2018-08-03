import React from 'react'
import Disqus from 'disqus-react'

export const Footer = (url, title) => {
  const disqusShortname = 'coffee-driven-development'
  const disqusConfig = {
    url,
    identifier: '121',
    title,
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
