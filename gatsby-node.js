const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');
exports.createPages= ({actions,graphql})=>{
    const {createPage} = actions;
    const blogPostTemplate = path.resolve("./src/templates/blogPosts.js");
    return graphql(`{
        allMdx(
            sort:{fields:[frontmatter___date],order:DESC}
            filter:{frontmatter:{published:{eq:true}}}
        ){
            nodes{                
                slug                
                frontmatter{
                   title 
                }
            }
        }
    }`).then((result)=>{
        if(result.error){
            throw result.errors
        }
        const posts = result.data.allMdx.nodes;
        posts.forEach((post,index)=>{
            console.log(post.slug);
            // const previous = index === post.length -1 ? null : post[index+1];
            // const next = index ===0 ?null :post[index-1];
            createPage({
                path:post.slug,
                component: blogPostTemplate,
                context:{
                    slug:post.slug,
                    // previous,
                    // next,
                }
            })
        })
    });
};
exports.onCreateNode = ({node,getNode, actions})=>{
    const {createNodeField} = actions;
    if(node.internal.type ==="Mdx"){
        const value = createFilePath({node,getNode});
        console.log(value + "||" + actions);
        createNodeField({
            name:'slug',
            node,
            value
        });
    }
};