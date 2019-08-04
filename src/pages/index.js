import React from "react";
import { Link, graphql } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

import "react-tabs/style/react-tabs.css";

/**
 * A tab container for the categories of the blog.
 */
const CategoryTabs = ({ category, tab0Content, tab1Content, tab2Content }) => {
  let defaultIndex;
  switch (category) {
    case null: {
      defaultIndex = 0;
      break;
    }
    case "photos": {
      defaultIndex = 1;
      break;
    }
    case "video": {
      defaultIndex = 2;
      break;
    }
  }
  return (
    <Tabs defaultIndex={defaultIndex}>
      <TabList>
        <Tab
          onClick={() => {
            navigate("/");
          }}
        >
          Dev
        </Tab>
        <Tab
          onClick={() => {
            navigate("?category=photos");
          }}
        >
          Photos
        </Tab>
        <Tab
          onClick={() => {
            navigate("?category=video");
          }}
        >
          Video
        </Tab>
      </TabList>

      <TabPanel>{tab0Content}</TabPanel>
      <TabPanel>{tab1Content}</TabPanel>
      <TabPanel>{tab2Content}</TabPanel>
    </Tabs>
  );
};

CategoryTabs.propTypes = {
  category: PropTypes.string,
  tab0Content: PropTypes.element,
  tab1Content: PropTypes.element,
  tab2Content: PropTypes.element
};

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const urlParams = new URLSearchParams(location.search);
  const category = urlParams.get("category");
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[
          `blog`,
          `javascript`,
          `elixir`,
          `react`,
          `node.js`,
          `node`,
          `developer`,
          `software`,
          `alec brunelle`
        ]}
      />
      <Bio />
      <CategoryTabs
        category={category}
        tab0Content={
          <div>
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
          </div>
        }
        tab1Content={<h2> put stuff here </h2>}
        tab2Content={<h2> put stuff here </h2>}
      />
    </Layout>
  );
};

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
