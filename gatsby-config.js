module.exports = {
    siteMetadata: {
        title: `Gatsby`,
        siteUrl: `https://www.gatsbyjs.com`,
        description: `Blazing fast modern site generator for React`,
        social:{
            github:``
        },
      },
    plugins:[{
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions:[`.mdx`,`md`],
        },
    },  {
        resolve: `gatsby-source-filesystem`,
        options: {
            name:`blog`,
            path:`${__dirname}/blog`,
        },
    },]

}