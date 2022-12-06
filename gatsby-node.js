const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');
exports.createPages= async ({actions,graphql})=>{
    
    const {createPage} = actions;
    const blogPostTemplate = path.resolve("./src/templates/blogPosts.js");
    const expPostTemplate = path.resolve("./src/templates/experience.js");
    const { createNodeField } = actions
    // if (node.internal.type === `Mdx`) {
    //   createNodeField({
    //     node,
    //     name: `slug`,
    //     value: `/${slugify(node.frontmatter.title)}`
    //   })
    // }
    const blog = await graphql(`{
        allMdx(
            sort:{fields:[frontmatter___date],order:DESC}
            filter: {frontmatter: {published: {eq: true}}, internal: {contentFilePath: {regex: "/blog/"}}}
        ){
            nodes{                
                frontmatter{
                    slug                
                     title 
                }
                internal{
                    contentFilePath
                }
            }
        }
    }`).then((result)=>{
        if(result.error){
            throw result.errors
        }        
        const posts = result.data.allMdx.nodes;
        posts.forEach((post,index)=>{
            const final_path = `${blogPostTemplate}?__contentFilePath=${ post.internal.contentFilePath }`;
            const previous = (index === 0) ? false : posts[index-1] ;
            console.log("------------------------------")
            console.log(final_path + "\n");
            console.log(post.frontmatter.slug);
            console.log("------------------------------")
            const next = (index === posts.length) ? false :posts[index+1];
            createPage({
                path:post.frontmatter.slug,
                component: final_path,
                context:{
                    slug:post.frontmatter.slug,
                    previous,
                    next,
                }
            })
        })
    });

    const about = await graphql(`{
        allMdx(
            sort:{fields:[frontmatter___startDate],order:DESC}
            filter: {frontmatter: {published: {eq: true}}, internal: {contentFilePath: {regex: "/experience/"}}}
        ){
            nodes{                
                frontmatter{
                    slug                
                    role 
                }
                internal{
                    contentFilePath
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
            const final_path = `${expPostTemplate}?__contentFilePath=${job.internal.contentFilePath}`;
            const next = (index === jobs.length) ?false :jobs[index+1];
            createPage({
                path:`about/${job.frontmatter.slug}`,
                component: final_path,
                context:{
                    slug:job.frontmatter.slug,
                    previous,
                    next,
                }
            })
        })
    });

    
    
};
// const slugify = require(`@sindresorhus/slugify`)
// exports.onCreateNode = ({node, actions})=>{
//     const {createNodeField} = actions;
//     if(node.internal.type ==="Mdx"){
//         const value = createFilePath({node,getNode});
//         createNodeField({
//             name:'slug',
//             node,
//             value
//         });
//     }
// };

// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//       resolve: {
//         modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//       },
//     })
//   }