const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');
exports.createPages= async ({actions,graphql})=>{
    const {createPage} = actions;
    const blogPostTemplate = path.resolve("./src/templates/blogPosts.js");
    const expPostTemplate = path.resolve("./src/templates/experience.js")
    const blog = await graphql(`{
        allMdx(
            sort:{fields:[frontmatter___date],order:DESC}
            filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: { regex: "/blog/"}}
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
            const previous = (index === 0) ? false : posts[index-1] ;
            const next = (index === posts.length) ? false :posts[index+1];
            createPage({
                path:post.slug,
                component: blogPostTemplate,
                context:{
                    slug:post.slug,
                    previous,
                    next,
                }
            })
        })
    });

    const about = await graphql(`{
        allMdx(
            sort:{fields:[frontmatter___startDate],order:DESC}
            filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: { regex: "/experience/"}}
        ){
            nodes{                
                slug                
                frontmatter{
                   role 
                }
            }
        }
    }`).then((result)=>{
        if(result.error){
            throw result.errors
        }
        const jobs = result.data.allMdx.nodes;
        jobs.forEach((job,index)=>{
            const previous = (index === 0) ? false : jobs[index-1] ;
            const next = (index === jobs.length) ?false :jobs[index+1];
            createPage({
                path:job.slug,
                component: expPostTemplate,
                context:{
                    slug:job.slug,
                    previous,
                    next,
                }
            })
        })
    });

    
    
};
exports.onCreateNode = ({node,getNode, actions})=>{
    const {createNodeField} = actions;
    if(node.internal.type ==="Mdx"){
        const value = createFilePath({node,getNode});
        createNodeField({
            name:'slug',
            node,
            value
        });
    }
};

// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//       resolve: {
//         modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//       },
//     })
//   }