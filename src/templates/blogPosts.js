import {Link, graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";
import Container from "../components/container";
const blogPosts = (data) =>{
    const {body,frontmatter} = data.data.mdx; 
    
    const {previous,next} = data.pageContext;
    console.log(data.pageContext);
    // const {previous,next} = null;
    
    return (
        <Container>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <article><MDXRenderer>{body}</MDXRenderer></article>
            {previous === false ? null : (
                <>
                {previous && (
                    <Link to={previous.fields.slug}>
                        <button>{previous.frontmatter.title}</button>
                    </Link>
                )}
                </>
            )}
            {next === false ? null : (
                <>
                {next && (
                    <Link to={next.fields.slug}>
                        <button>{next.frontmatter.title}</button>
                    </Link>
                )}
                </>
            )}
        </Container>
    )
};
export default blogPosts;
export const pageQuery = graphql`
query PostsBySlug($slug:String){
    mdx(slug:{eq:$slug}){
        body
        frontmatter{
            title
            date(formatString:"Do MMMM YYYY")
        }
    }
}
`;