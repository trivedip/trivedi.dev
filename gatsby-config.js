module.exports = {
    siteMetadata: {
        title: `Priyank Trivedi || Portfolio & Blog`,
        siteUrl: `https://trivedi.dev`,
        description: `Priyank Trivedi || Portfolio & Blog`,
        social:{
            github:``
        },
      },
    plugins:[
        `gatsby-plugin-image`,
        `react-icons`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-postcss`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name:`blog`,
            path:`${__dirname}/blog`,
        },
    },{
        resolve: `gatsby-source-filesystem`,
        options: {
            name:`blog`,
            path:`${__dirname}/experience`,
        },
    },{
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions:[`.mdx`,`.md`],
        },
    },
        `gatsby-plugin-sharp`,
        `gatsby-remark-images`,{
            resolve:`gatsby-plugin-mdx`,
            options:{
                gatsbyRemarkPlugins:[
                    {
                        resolve:`gatsby-remark-images`,
                        options:{
                            maxWidth:1200,
                        }
                    }
                ]
            },        
    },{
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: `${__dirname}/pages/assets/svg/` // See below to configure properly
          }
        }
      }
    ]

}