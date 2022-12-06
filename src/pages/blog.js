import React from 'react';
import { Link,graphql } from "gatsby";


const Blog = ({data}) => {

    const post = data.allMdx.nodes;
    return(
        <>
        <div className="m-auto px-3 sm:px-12 md:px-20 max-w-screen-xl" style={{zIndex:1}}>
        <h1>Recent Post</h1>
        {post.map((pst)=>{
            const title = pst.frontmatter.title;
            return(
              <Link className="card-link" to={`/${pst.slug}`}>
                <div className="card" key={pst.slug}>
                    <h1 className="min-w-full">{title}</h1>
                    <p className="card-date">{pst.frontmatter.date}</p>
                    <p className="card-description">{pst.frontmatter.description}</p>
                </div>
              </Link>
            );
        })}
        </div>
        </>
    );
    
};

export default Blog;

export const pageQuery = graphql`
{
    site {
        siteMetadata {
          description
          title
        }
    }
    allMdx(sort: {order: DESC, fields: [frontmatter___date]}
      filter: {frontmatter: {published: {eq: true}}, internal: {contentFilePath: {regex: "/blog/"}}}
      ) {
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