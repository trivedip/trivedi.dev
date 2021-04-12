import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import { Link } from 'gatsby';
const ExpList = ()=>{
    return(
        <StaticQuery query={graphql`
                query{ allMdx(sort: {order: DESC, fields: [frontmatter___startDate]}
                    filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: { regex: "/experience/"}}
                ) {
                  nodes {
                    slug
                    frontmatter {
                      date(formatString: "DD MMMM YYYY")
                      startDate(formatString: "DD MMMM YYYY")
                      endDate(formatString: "DD MMMM YYYY")
                      description
                      published
                      title
                      role
                      bullets
                      company
                      type
                      technology
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
                <Link to={`/${post.slug}`} key={post.slug}>
                <div className="p-3 md:p-5 my-3 md:my-5 rounded shadow hover:bg-gray-600 hover:text-gray-50 blocks-bg">
                    <span className="flex flex-col md:flex-row pt-1.5 rounded" >
                        <div className="font-semibold">{post.frontmatter.role}</div>
                        <div className="md:ml-auto flex sm:justify-start md:justify-end">{post.frontmatter.startDate} - {post.frontmatter.endDate}</div>
                    </span>
                    <div className="pb-2 font-semibold">{post.frontmatter.company}<span className="ml-1 md:ml-2 py-1 px-2 text-xs rounded-full shadow-inner bg-pills">{post.frontmatter.type}</span></div>
                    <div className="mb-1">
                        {post.frontmatter.description}
                    </div>
                    <div>
                        <ul className="list-disc px-3 md:px-5">
                    {
                        Object.entries(post.frontmatter.bullets).map((key)=>{
                            return(
                            <>
                                <li className="py-1">{key[1]} </li>
                            </>
                            )
                            })
                    }
                    </ul>
                    </div>
                    <div className="mt-2 md:mt-5">Technology Used:
                        {(post.frontmatter.technology)? Object.entries(post.frontmatter.technology).map((key)=>{
                            return(
                            <>
                                <span className="ml-0.5 md:ml-2 py-1 px-2 text-xs rounded-full shadow bg-blue">{key[1]} </span>
                            </>
                            )
                            })
                            :''}
                    </div>
                </div>
                </Link>       
                </>
                )
            })        
        )}/>
        )    
};

export default ExpList;