import React from "react";
import styled from "astroturf";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneLight";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const StyledPre = styled("pre")`
  border-radius: 0.125rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-family: Monaco, monaco, Consolas, monospace;
  overflow-x: scroll;
  background-color: var(--bg-code);
  color: var(--col);

  & .token-line {
    line-height: 1.3rem;
    height: 1.3rem;
  }
`;

export const Pre = ({ codeString, language, ...props }) => {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        theme={theme}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <StyledPre
            className={className}
            style={{ "--col": theme.plain.color }}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </StyledPre>
        )}
      </Highlight>
    );
  }
};

export const Code = styled("code")`
  border-radius: 0.125rem;
  padding: 0.125rem 0.25rem;
  font-size: 0.875rem;
  font-family: Monaco, monaco, Consolas, monospace;
  background-color: var(--bg-code);
`;
