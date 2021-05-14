module.exports = {
    flags: { PRESERVE_WEBPACK_CACHE: true },
    siteMetadata: {
        title: ` Priyank Trivedi -- Portfolio & Blog`,
        siteUrl: `https://www.priyanktrivedi.com`,
        description: `Priyank Trivedi || Portfolio & Blog`,
        social:{
            github:``
        },
      },
    plugins:[
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        `react-icons`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-postcss`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sitemap`,
    {
        resolve: `gatsby-plugin-offline`,
        options: {
            precachePages: [`/about/`, `/*/*`],
            },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name:`blog`,
            path:`${__dirname}/blog`,
        },
    },{
        resolve: `gatsby-source-filesystem`,
        options: {
            name:`experience`,
            path:`${__dirname}/experience`,
        },
    },{
        resolve: `gatsby-plugin-mdx`,
        options: {
            extensions:[`.mdx`,`.md`],
            gatsbyRemarkPlugins: [               
                {
                  resolve: "gatsby-remark-prismjs",
                  options: {},
                },{
                    resolve:`gatsby-remark-images`,
                    options:{
                        maxWidth:1200,
                    }
                }
              ],
        },
    },       
       {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: `${__dirname}/pages/assets/svg/` // See below to configure properly
          }
        }
      }
    ]

}