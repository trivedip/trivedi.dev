import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {Helmet} from "react-helmet";
const Seo = ({description, lang, meta, title,link}) =>{
    const {site} = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
                description
                social{
                    github
                }
            }
        }
    }
    `);
    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata.title;
    return(
        <Helmet htmlAttributes={{lang,}}
        title={title}
        titleTemplate={defaultTitle? `%s - ${defaultTitle}`:null}
        link={[{
            rel: `icon`,
            type: `image/jpg`,
            href: `../../img/pt.png`}
        ]}   
        meta={[
            {
                name: `description`,
                content: metaDescription
            }, {
                property: `og:title`,
                content: title
            },{
                property: `og:description`,
                content: metaDescription
            },{
                property: `og:type`,
                content: `website`
            },
            {
                property: `twitter:card`,
                content: `summary`
            }
            ,{
                property: `twitter:creator`,
                content: site.siteMetadata?.social?.twitter || ``,
            }
            ,{
                property: `twitter:title`,
                content: title
            }
            ,{
                property: `twitter:description`,
                content: metaDescription
            }                        
        ].concat(meta)}/>
    )
};

Seo.defaultProps={
    lang:`en`,
    meta:[],
    description:``,
}
export default Seo;