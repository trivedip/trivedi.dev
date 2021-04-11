import {Link, graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";
const expPosts = (data) =>{
    const {body,frontmatter} = data.data.mdx; 
    
    const {previous,next} = data.pageContext;
    console.log(previous);
    console.log(next);
    return (
        <>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>Duration: {frontmatter.startDate} - {frontmatter.endDate}</p>
            <article><MDXRenderer>{body}</MDXRenderer></article>
            {previous === false ? null : (
                <>
                {previous && (
                    <Link to={`/${previous.slug}`}>
                        <button>{previous.frontmatter.title}</button>
                    </Link>
                )}
                </>
            )}
            {next === false ? null : (
                <>
                {next && (
                    <Link to={`/${next.slug}`}>
                        <button>{next.frontmatter.title}</button>
                    </Link>
                )}
                </>
            )}
        </>
    )
};
export default expPosts;
export const pageQuery = graphql`
query PostsByExp($slug:String){
    mdx(slug:{eq:$slug}){
        body
        frontmatter{
            title
            date(formatString:"Do MMMM YYYY")
            startDate(formatString:"Do MMMM YYYY")
            endDate(formatString:"Do MMMM YYYY")
        }
    }
}
`;