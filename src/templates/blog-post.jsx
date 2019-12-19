import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import { GITHUB_REPO_NAME, GITHUB_USERNAME } from "../utils/constants";

/**
 * Builds a url where users can fork the blog post.
 * @param {String} blogContentFolderName The folder where the blog piece is located in, inside the content folder.
 */
const buildGithubEditUrl = blogContentFolderName => {
  return `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog${blogContentFolderName}index.md`;
};

/**
 * Builds a url where users can go search twitter posts with this blog piece inside of the tweet.
 * @param {String} blogContentFolderName The folder where the blog piece is located in, inside the content folder.
 */
const buildTwitterDiscussUrl = blogContentFolderName => {
  return `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://blog.alec.coffee${blogContentFolderName}`
  )}`;
};

/**
 * The component which renders the content of a single blog post.
 */
class BlogPostTemplate extends React.Component {
  componentDidMount() {
    if (!window.dojoRequire) {
      return;
    }
    window.dojoRequire(["mojo/signup-forms/Loader"], L => {
      L.start({
        baseUrl: "mc.us15.list-manage.com",
        uuid: "a3148896870d61ede572df801",
        lid: "c1e98351d4",
        uniqueMethods: true
      });
    });
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          canonicalUrl={post.frontmatter.canonicalUrl}
          logoUrl={post.frontmatter.logoUrl}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer>
          <p>
            <a
              href={buildTwitterDiscussUrl(this.props.location.pathname)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss on Twitter
            </a>
            {` • `}
            <a
              href={buildGithubEditUrl(this.props.location.pathname)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit on GitHub
            </a>
          </p>
        </footer>
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.frontmatter.path} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.path} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        canonicalUrl
        logoUrl
      }
    }
  }
`;
