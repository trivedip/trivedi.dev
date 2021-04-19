import React from 'react';
import { graphql } from "gatsby";
import Hero from "../components/indexComponents/hero";
import LatestBlog from '../components/indexComponents/latestBlogContainer';
import Experience from '../components/indexComponents/recentExperienceContainer';
import SEO from "../components/sitewideComponents/seo";

const Home = ({data}) => {
    const siteDescription = data.site.siteMetadata.description;
    return(
        <>        
          <SEO title="Home" description={siteDescription}/>      
          <div className="m-auto px-3 sm:px-12 md:px-20 max-w-screen-xl">
          <Hero/>          
          <LatestBlog/>
          <Experience/>
          </div>
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