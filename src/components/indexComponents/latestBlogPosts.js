import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Link} from 'gatsby';

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
            console.log("Hello");
            console.log(post.slug);
            return(
            <>    
            <Link to={`/${post.slug}`}>
                <div className="p-3 md:p-5 my-3 md:my-5 rounded hover:bg-gray-600 hover:text-gray-50">
                    <span className="flex flex-col md:flex-row pt-1.5 rounded" >
                        <div className="font-semibold text-lg">{post.frontmatter.title}</div>
                        <div className="md:ml-auto flex sm:justify-start md:justify-end">{post.frontmatter.date}</div>
                    </span>
                    <div>
                        {post.frontmatter.description}
                    </div>
                </div>
            </Link>         
            </>
            )
        })        
    )}/>
    )    
};

export default LatestBlogPosts;
