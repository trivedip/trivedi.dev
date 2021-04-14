import {Link, graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const expPosts = (data) =>{
    const {body,frontmatter} = data.data.mdx; 
    const img = getImage(frontmatter.featuredImage)
    const {previous,next} = data.pageContext;  
    return (
        <>
            <h1>{previous.slug}</h1>
            {img&&<GatsbyImage image={img}></GatsbyImage>}
            <h1>{frontmatter.role}</h1>
            <p>{frontmatter.date}</p>
            <p>Duration: {frontmatter.startDate} - {frontmatter.endDate}</p>
            <article><MDXRenderer>{body}</MDXRenderer></article>
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
        </>
    )
};
export default expPosts;
export const pageQuery = graphql`
query PostsByExp($slug:String){
    mdx(slug:{eq:$slug}){
        body
        frontmatter{
            role
            date(formatString:"Do MMMM YYYY")
            startDate(formatString:"Do MMMM YYYY")
            endDate(formatString:"Do MMMM YYYY")
            featuredImage {
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                }
              }
        }
    }
}
`;