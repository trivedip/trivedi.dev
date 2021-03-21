module.exports = {
    siteMetadata: {
        title: `Priyank Trivedi || Portfolio & Blog`,
        siteUrl: `https://trivedi.dev`,
        description: `Priyank Trivedi || Portfolio & Blog`,
        social:{
            github:``
        },
      },
    plugins:[{
        resolve: `gatsby-source-filesystem`,
        options: {
            name:`blog`,
            path:`${__dirname}/blog`,
        },
    },{
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions:[`.mdx`,`.md`],
        },
    },]

}