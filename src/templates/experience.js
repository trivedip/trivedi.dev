import {Link, graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const expPosts = (data) =>{
    // console.log(data.data.allMdx.nodes[0]);
    const {body,frontmatter} = data.data.allMdx.nodes[0]; 
    
    const img = getImage(frontmatter.featuredImage)
    console.log(frontmatter.featuredImage.childImageSharp);
    const {previous,next} = data.pageContext;  
    return (
        <>
            {/* {img && 
            <div>
            <GatsbyImage className="tester" image={img} objectFit="cover" alt="Texas State university cover image containing Kinect motion detection, Veteran bio signal collection."></GatsbyImage>
            </div>} */}
            
            <div className="m-auto px-3 sm:px-12 md:px-20 max-w-screen-xl">
                <span className="flex md:space-x-5 mt-5 flex-col md:flex-row mb-2 md:mb-5">
                    <div className="rounded p-3 flex-1 mt-5 md:mt-0 flex flex-col shadow-none md:shadow bg-dark-blue" >
                        <div className="uppercase tracking-widest text-sm underline py-2 pl-5">Role</div>   
                        <div className="inline-block"><div className="px-5">{frontmatter.role}</div></div>
                    </div>
                    <div className="rounded p-3 flex-1 mt-5 md:mt-0 flex flex-col shadow-none md:shadow-inner bg-dark-blue ">
                        <div className="uppercase tracking-widest text-sm underline py-2 pl-5">Technology Used</div>   
                        <div className="inline-block"><div className="px-5">
                        {(frontmatter.technology)? Object.entries(frontmatter.technology).map((key)=>{
                            return(
                            <>
                                <span className="mr-2 py-1 pr-2">{key[1]} </span>
                            </>
                            )
                            })
                            :''}
                        </div></div>
                    </div>
                    <div className="rounded p-3 flex-1 mt-5 md:mt-0 flex flex-col shadow-none md:shadow-inner bg-dark-blue ">
                        <div className="uppercase tracking-widest text-sm underline py-2 pl-5">Duration</div>   
                        <div className="inline-block"><div className="px-5">{frontmatter.startDate} - {frontmatter.endDate ? frontmatter.endDate : 'Present'}</div></div>
                        
                    </div>
                </span>
                {previous.slug&& <h1>{previous.slug}</h1>}
                <article><MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer></article>
                <div className="flex flex-col md:flex-row justify-between">
                {(previous===false) ? <span className="not-sr-only"></span> : (
                    <>
                    {previous && (
                        <Link className="my-3 p-1 text-lg duration-150 transform hover:scale-105 inline-block" style={{border:'1px solid var(--color-gray700)'}} to={`/${previous.slug}`}>
                            <button><BsArrowLeft className="inline-block"/>{previous.frontmatter.role}</button>                        
                        </Link>
                    )}
                    </>
                )}
                {next === false ? <span className="not-sr-only"></span> : (
                    <>
                    {next && (
                        <Link className="my-3 p-1 text-lg duration-150 transform hover:scale-105 inline-block" style={{border:'1px solid var(--color-gray700)'}} to={`/${next.slug}`}>
                            {next.frontmatter.role}<BsArrowRight className="inline-block"/>
                        </Link>
                    )}
                    </>
                )}
                </div>
            </div>
        </>
    )
};
export default expPosts;
export const pageQuery = graphql`
query PostsByExp($slug:String){
        allMdx(filter: {slug: {eq:$slug}}){
            nodes {
                body
                frontmatter {
                  endDate(formatString: "MMMM YYYY")
                  startDate(formatString: "MMMM YYYY")
                  role
                  technology
                  bullets
                  featuredImage {
                    childImageSharp {                      
                      gatsbyImageData(
                          height:500
                          layout: FULL_WIDTH
                        )
                    }
                  }       
                }      
              }
        }
    }
`;

// query PostsByExp($slug:String){
//     mdx(slug:{eq:$slug}){
//         body
//         frontmatter{
//             role
//             date(formatString:"Do MMMM YYYY")
//             startDate(formatString:"Do MMMM YYYY")
//             endDate(formatString:"Do MMMM YYYY")
//             featuredImage {
//                 childImageSharp {
//                     gatsbyImageData(
//                         placeholder: BLURRED
                            
//                         formats: [AUTO, WEBP, AVIF]
//                       )
//                 }
//               }
//         }
//     }
// }