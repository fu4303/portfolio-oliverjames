module.exports = {
  siteMetadata: {
    title: `Oliver Phillips - UI Developer`,
    author: `Oliver Phillips`,
    description: `Oliver Phillips designs and develops user interfaces, mostly for the web`,
    siteUrl: `https://oliverjam.es/`,
    social: {
      twitter: `_oliverjam`,
      github: `oliverjam`,
      linkedIn: `oliverjam`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oliver Phillips`,
        short_name: `Oliverjam`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffa500`,
        display: `minimal-ui`,
        icon: `content/assets/jamjar.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            stage: 0,
          }),
        ],
      },
    },
    `gatsby-plugin-astroturf`,
    `gatsby-plugin-netlify`,
  ],
};
