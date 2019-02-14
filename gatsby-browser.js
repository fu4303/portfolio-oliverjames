import React from "react";
import Provider from "./src/components/mdx/Provider";
import "./src/global.css";

export const wrapRootElement = ({ element }, options) => {
  return <Provider>{element}</Provider>;
};
