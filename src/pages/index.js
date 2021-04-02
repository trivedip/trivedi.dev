import React from 'react';
import { graphql } from "gatsby";
// import Container from "../components/container";
import { StaticImage } from "gatsby-plugin-image"
import Hero from "../../src/components/hero";


const Home = ({data}) => {
  
    return(
        <>
          <Hero/>
        </>
    );
    
};

export default Home;

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
          slug
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            description
            published
            title
          }
        }
      }
    
    }
`;