import React from 'react';
import {StaticQuery, graphql} from 'gatsby';

const LatestBlogPosts = () => {
    return(
    <StaticQuery query={graphql`
            query{ allMdx(limit:5,sort: {order: DESC, fields: [frontmatter___date]}
                filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: { regex: "/blog/"}}
            ) {
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
        }`
    }
    render = {data=>(
        
        Object.keys(data.allMdx.nodes).map((key_index)=>{
            const allPost = data.allMdx.nodes;
            const post = allPost[key_index];
            return(
            <>            
            <div className="py-5 px-5 rounded hover:bg-gray-600 hover:text-gray-50">
                <span className="flex py-1.5 rounded" >
                    <div className="w-5/6">{post.frontmatter.title}</div>
                    <div className="w-1/6 ml-auto flex justify-end">{post.frontmatter.date}</div>
                </span>
                <div>
                    {post.frontmatter.description}
                </div>
            </div>
            </>
            )
        })        
    )}/>
    )    
};

export default LatestBlogPosts;
