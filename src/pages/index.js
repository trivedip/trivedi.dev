import React from 'react';
import { graphql } from "gatsby";
// import Container from "../components/container";
import { StaticImage } from "gatsby-plugin-image"
// import wall from "./assets/image/img.jpeg";


const Home = ({data}) => {
  
    return(
        <>
          <h1>Hello there from Priyank</h1>
          <StaticImage src="./assets/image/img.jpeg"></StaticImage>
          <StaticImage src="./assets/image/img1.jpg"></StaticImage>
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