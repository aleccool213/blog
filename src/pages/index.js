import React from "react";
import { Link, graphql } from "gatsby";
import Darkmode from "@alec.brunelle/darkmode-js";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

const options = {
  label: "🌓"
};
const darkmode = new Darkmode(options);
darkmode.showWidget();

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[
            `blog`,
            `javascript`,
            `elixir`,
            `react`,
            `node.js`,
            `node`,
            `alec brunelle`
          ]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.frontmatter.path;
          return (
            <div key={node.frontmatter.path}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={node.frontmatter.path}
                  id="post-page-link"
                >
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`;
