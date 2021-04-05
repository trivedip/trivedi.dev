import React from 'react';
import {useStaticQuery, graphql} from "gatsby";
import {Helmet} from "react-hemet";
const SEO = ({description, lang, meta, title}) =>{
    const {site} = useStaticQuery(graphq`
    query{
        site{
            siteMetadeta{
                title
                description
                social
            }
        }
    }
    `);
    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata.title;
    // return(
    //     <Helmet htmlAttributes={{lang,}}
    //     title={title}
    //     titleTemplate={defaultTitle? `%s |${defaultTitle}`:null}
    //     meta={[
    //         {
    //             name: `description`,
    //             content: metaDescription
    //         }, {
    //             property: `og:title`,
    //             content: title
    //         },{
    //             property: `og:description`,
    //             content: metaDescription
    //         },{
    //             property: `og:type`,
    //             content: `website`
    //         }
    //     ]}.concat(meta}/>
    // )
};