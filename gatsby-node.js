const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              id
              excerpt
              code {
                body
              }
              timeToRead
              fields {
                slug
              }
              frontmatter {
                published
                title
                date
                readableDate: date(formatString: "MMMM DD, YYYY")
                path
                tags
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
  const posts = result.data.allMdx.edges.map(({ node }) => node);

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    if (post.frontmatter.published) {
      createPage({
        path: post.fields.slug,
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
      slug: post.fields.slug,
      frontmatter: post.frontmatter,
      excerpt: post.excerpt,
      body: post.code.body,
      timeToRead: post.timeToRead,
    };
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    // console.log(node);
    // console.log("\n", parent);
    createNodeField({
      name: `slug`,
      node,
      value: `blog/${parent.relativeDirectory}`,
    });
  }
};
