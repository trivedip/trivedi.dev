import React from 'react';
import { Link,graphql } from "gatsby";


const Blog = ({data}) => {
    // console.log(data.site);
    // const siteTitle=  data.site.siteMetadata.title;
    // const siteDescription = data.site.siteMetadata.description;
    const post = data.allMdx.nodes;
    // return(<h1>Hello</h1>);
    return(
        <><h1>Blog Post</h1>
        {post.map((pst)=>{
            const title = pst.frontmatter.title;
            return(
                <div className="card" key={pst.slug}>
                  <Link className="card-link" to={`/${pst.slug}`}>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-date">{pst.frontmatter.date}</p>
                    <p className="card-description">{pst.frontmatter.description}</p>
                    </Link>
                </div>
            );
        })}
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