import React from "react";
import { graphql } from "gatsby";

import HomeLayout from "../components/HomeLayout";
import SEO from "../components/seo";
import About from "../components/About";
import Writing from "../components/Writing";
import Social from "../components/Social";

class BlogIndex extends React.Component {
  render() {
    // const { data } = this.props;
    // const siteTitle = data.site.siteMetadata.title;
    // const posts = data.allMarkdownRemark.edges;

    return (
      <>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <HomeLayout
          about={<About />}
          writing={<Writing />}
          social={<Social />}
        />
      </>
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
