import {Link, graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";
const blogPosts = (data) =>{
    const {body,frontmatter} = data.data.mdx;     
    const {previous,next} = data.pageContext;
    return (
        <>
        <div className="m-auto px-3 sm:px-12 md:px-20 max-w-screen-xl">   
            <h1 className="text-2xl">{frontmatter.title}</h1>
            <p className="text-sm">{frontmatter.date}</p>
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
            </div>
        </>
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