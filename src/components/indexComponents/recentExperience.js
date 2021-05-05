import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Link} from 'gatsby';

const RecentExperience = () => {
    return(
    <StaticQuery query={graphql`
            query{ allMdx(limit:3,sort: {order: DESC, fields: [frontmatter___startDate]}
                filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: { regex: "/experience/"}}
            ) {
              nodes {
                slug
                frontmatter {
                  date(formatString: "DD MMMM YYYY")
                  description
                  startDate(formatString: "MMM YYYY")
                  endDate(formatString: "MMM YYYY")
                  published
                  role
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
            <Link to={`/${post.slug}`}>
            <div className="p-3 md:px-5 md:py-3 my-1 rounded hover:bg-gray-600 hover:text-gray-50 hover-fix ">
                <span className="flex flex-col md:flex-row pt-1.5 rounded" >
                    <div className="font-semibold text-lg bright">{post.frontmatter.role}</div>
                    <div className="md:ml-auto flex sm:justify-start md:justify-end">{post.frontmatter.startDate} - {post.frontmatter.endDate ? post.frontmatter.endDate : 'Present'}</div>
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

export default RecentExperience;


