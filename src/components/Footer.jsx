import React from 'react'

export const Footer = ({ devLink }) => {
  console.log(devLink)
  return (
    <span>
      <h2>
        ❤️ If you found this article useful, consider{' '}
        <a target="_blank" href="http://eepurl.com/dfs9Db">
          subbing
        </a>{' '}
        for more in the future and{' '}
        <a target="_blank" href="https://twitter.com">
          tweeting
        </a>{' '}
        it out. ❤️
      </h2>
      {devLink ? (
        <blockquote>
          Want to comment? Head over to the{' '}
          <a target="_blank" href={devLink}>
            Dev.to
          </a>{' '}
          version of this post to do so.
        </blockquote>
      ) : (
        ''
      )}
    </span>
  )
}
