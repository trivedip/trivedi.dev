import React from 'react';
import { graphql } from "gatsby";

const Home = ({data}) => {
    // console.log(data.site);
    const siteTitle=  data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    const post = data.allMdx.nodes;
    console.log(post);
    // return(<h1>Hello</h1>);
    return(
        <div><h1>Blog Post</h1>
        {post.map((pst)=>{
            const title = pst.frontmatter.title;
            return(
                <div className="card">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-date">{pst.frontmatter.date}</p>
                    <p className="card-description">{pst.frontmatter.description}</p>
                </div>
            );
        })}
        </div>
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
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            description
            pusblished
            title
          }
        }
      }
    
    }
`;