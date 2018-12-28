import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import profilePic from '../components/profile-pic.jpg'
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import './index.css'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet>
          <title>{get(this, 'props.data.site.siteMetadata.title')}</title>
          <meta
            name="Description"
            content="A blog written by Alec Brunelle who lives and works in Toronto, building useful things."
          />
          <meta property="og:image" content={profilePic} />
        </Helmet>
        <Bio />
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            return (
              <div key={post.node.frontmatter.path}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: 'none' }}
                    to={post.node.frontmatter.path}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </h3>
                <small>{post.node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>
            )
          }
        })}
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
