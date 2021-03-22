import {Link, graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";
import Container from "../components/container";

const blogPosts = (data, pageContext)=>{
    const {body,frontmatter} = data.data.mdx; 
    const {previous,next} = pageContext;
    return (
        <Container>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <article><MDXRenderer>{body}</MDXRenderer></article>
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