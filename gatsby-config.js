module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    desc: "A new blog"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "1gx9gly5rm29",
        accessToken:
          "06e5a792af9c70ba82af2433645c42c920b3dc63c0fa60ea3ded235957a8d38c"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/assets`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark"
  ]
};
