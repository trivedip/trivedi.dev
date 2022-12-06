import React from 'react';
// import { Link,graphql } from "gatsby";
import { graphql } from "gatsby";
import AboutExpList from '../components/aboutComponents/aboutExpList';
import Seo from "../components/sitewideComponents/seo";
import AboutHeader from '../components/aboutComponents/aboutHeader';

const About = ({data}) => {
    const siteDescription = data.site.siteMetadata.description;
    return(
        <>
        <Seo title="About Me" description={siteDescription}/> 
        <div className="m-auto px-3 sm:px-12 md:px-20 max-w-screen-xl">
          <AboutHeader/>
          {/* <Test/> */}
          <AboutExpList/>
        </div>     
        </>
    );
    
};

export default About;
export const pageQuery = graphql`
{
    site {
        siteMetadata {
          description
          title
        }
    }
    allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
        nodes {
          frontmatter {
            slug
            date(formatString: "DD MMMM YYYY")
            description
            published
            title
          }
        }
      }
    
    }
`;

