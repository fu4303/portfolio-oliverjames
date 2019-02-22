import React from "react";
import styled from "astroturf";
import { MDXProvider } from "@mdx-js/tag";
import { preToCodeBlock } from "mdx-utils";
import { Pre, Code } from "./Code";
import { List } from "./List";

const Post = styled("div")`
  margin-top: 1.5rem;
  line-height: 1.5;
  & > * + * {
    margin-top: 1rem;
  }
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin-top: 2rem;
    font-family: system-ui;
  }
  & a {
    text-decoration: underline;
    transition: color 0.2s;
    &:hover {
      color: var(--primary);
    }
  }
`;

export default class Provider extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <MDXProvider
        components={{
          wrapper: props => <Post {...props} />,
          inlineCode: props => <Code {...props} />,
          ul: props => <List {...props} />,
          ol: props => <List {...props} as="ol" />,
          pre: preProps => {
            const props = preToCodeBlock(preProps);
            // if there's a codeString and some props, we passed the test
            if (props) {
              return <Pre {...props} />;
            } else {
              // it's possible to have a pre without a code in it
              return <pre {...preProps} />;
            }
          },
        }}
      >
        {children}
      </MDXProvider>
    );
  }
}
