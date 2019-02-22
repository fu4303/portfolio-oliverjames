const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allFile(filter: { extension: { eq: "mdx" } }) {
          edges {
            node {
              id
              relativeDirectory
              childMdx {
                frontmatter {
                  published
                  title
                  date
                  readableDate: date(formatString: "MMMM DD, YYYY")
                  path
                  tags
                }
                code {
                  body
                }
                excerpt
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allFile.edges.map(({ node }) => node);

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    if (post.childMdx.frontmatter.published) {
      createPage({
        path: post.relativeDirectory,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          ...getPostContext(post),
          previous: getPostContext(previous),
          next: getPostContext(next),
        },
      });
    }
  });
};

function getPostContext(post) {
  if (post)
    return {
      id: post.id,
      slug: post.childMdx.frontmatter.path || post.relativeDirectory,
      frontmatter: post.childMdx.frontmatter,
      excerpt: post.childMdx.excerpt,
      body: post.childMdx.code.body,
    };
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    createNodeField({
      name: `slug`,
      node,
      value: parent.relativeDirectory,
    });
  }
};

// {
//   allMdx(
//     sort: { fields: [frontmatter___date], order: DESC }
//     limit: 1000
//   ) {
//     edges {
//       node {
//         frontmatter {
//           title
//         }
//       }
//     }
//   }
// }
