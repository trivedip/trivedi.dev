import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import { Link } from 'gatsby';
const ExpList = ()=>{
    return(
        <StaticQuery query={graphql`
                query{ allMdx(sort: {order: DESC, fields: [frontmatter___startDate]}
                    filter: {frontmatter: {published: {eq: true}}, internal: {contentFilePath: {regex: "/experience/"}}}
                ) {
                  nodes {
                      frontmatter {
                      slug
                      date(formatString: "MMMM YYYY")
                      startDate(formatString: "MMMM YYYY")
                      endDate(formatString: "MMMM YYYY")
                      description
                      published
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
                console.log("---------------------");
                console.log(post);
                return(
                <>                 
                <Link to={`${post.frontmatter.slug}`} key={post.slug}>
                {/* <div key={post.slug}> */}
                <div className="p-3 md:p-5 mb-3 md:mb-5 hover:text-gray-50 blocks-bg relative">
                <div className="click-me shadow-inner bg-pills-sec">Click for more details</div>
                    <span className="flex flex-col md:flex-row pt-1.5 rounded" >
                        <div className="font-semibold text-lg"><div id={post.slug} className="inline-block bright">{post.frontmatter.role}</div><div className="ml-1 md:ml-2 py-1 px-2 text-xs rounded-full shadow-inner bg-pills">{post.frontmatter.type}</div></div>
                        <div className="md:ml-auto flex sm:justify-start md:justify-end">{post.frontmatter.startDate} - {post.frontmatter.endDate ? post.frontmatter.endDate : 'Present'}</div>
                    </span>
                    <div className="pb-2 font-semibold">{post.frontmatter.company}</div>
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
                    <div className="mt-2 md:mt-5 mb-6">Technology Used:
                        {(post.frontmatter.technology)? Object.entries(post.frontmatter.technology).map((key)=>{
                            return(
                            <>
                                <span className="ml-0.5 md:ml-2 py-1 px-2 text-xs rounded-full shadow bg-pills-sec">{key[1]} </span>
                            </>
                            )
                            })
                            :''}
                    </div>
                    
                </div>
                {/* </div>   */}
                </Link>           
                </>
                )
            })        
        )}/>
        )    
};

export default ExpList;