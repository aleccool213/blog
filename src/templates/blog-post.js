import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { Footer } from '../components/Footer'
import { rhythm, scale } from '../utils/typography'

import profilePic from '../components/profile-pic.jpg'

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    window.dojoRequire(['mojo/signup-forms/Loader'], L => {
      L.start({
        baseUrl: 'mc.us15.list-manage.com',
        uuid: 'a3148896870d61ede572df801',
        lid: 'c1e98351d4',
        uniqueMethods: true,
      })
    })
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet>
          <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
          <meta
            property="og:image"
            content={
              post.frontmatter.logoUrl
                ? require(`../pages/${post.frontmatter.logoUrl}`)
                : profilePic
            }
          />
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Footer devLink={post.frontmatter.devLink} />
        <Bio />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        logoUrl
        devLink
      }
    }
  }
`
