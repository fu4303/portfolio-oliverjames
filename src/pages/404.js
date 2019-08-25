import React from "react";
import { graphql, Link } from "gatsby";
import styled from "astroturf";

import SEO from "../components/seo";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout>
        <SEO title="404: Not Found" />
        <h1>Page not found</h1>
        <p>
          Probably best to{" "}
          <Link style={{ textDecoration: "underline" }} to="/">
            go home
          </Link>{" "}
          and try again.
        </p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-gap: 0.5rem;
  place-content: center;
  font-size: 1.25rem;
`;
