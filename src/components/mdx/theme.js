/*
 Adapted from the Solarized Color Schemes originally by Ethan Schoonover
 http://ethanschoonover.com/solarized
*/

const theme = {
  plain: {
    color: "hsl(20, 60%, 30%)",
  },
  styles: [
    {
      types: [
        "comment",
        "prolog",
        "doctype",
        "cdata",
        "punctuation",
        "atrule",
        "attr-name",
        "keyword",
      ],
      style: {
        color: "hsl(20, 10%, 42%)",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: [
        "boolean",
        "number",
        "symbol",
        "deleted",
        "string",
        "attr-value",
        "char",
        "builtin",
        "url",
        "inserted",
        "selector",
      ],
      style: {
        color: "hsl(170, 45%, 33%)",
      },
    },
    {
      types: ["number"],
      languages: ["css"],
      style: {
        color: "hsl(20, 60%, 30%)",
      },
    },
    {
      types: ["entity"],
      style: {
        color: "#657b83",
        backgroundColor: "eee8d5",
      },
    },
    {
      types: [
        "constant",
        "function-variable",
        "tag",
        "operator",
        "function",
        "class-name",
        "regex",
        "important",
        "variable",
        "property",
      ],
      style: {
        color: "hsl(20, 100%, 39%)",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["entity"],
      style: {
        cursor: "help",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
  ],
};

export default theme;
