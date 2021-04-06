import React from 'react';
import { graphql } from "gatsby";
import Hero from "../components/indexComponents/hero";
import LatestBlog from '../components/indexComponents/latestBlogContainer';
import Experience from '../components/indexComponents/recentExperienceContainer';

const Home = ({data}) => {
  
    return(
        <>
          <Hero/>          
          <LatestBlog/>
          <Experience/>
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