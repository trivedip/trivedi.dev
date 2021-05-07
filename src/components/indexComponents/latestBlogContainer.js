import React from 'react';
import LatestBlogPosts from './latestBlogPosts'

const LatestBlog = () =>{
    return(
        <>
        <section id="down" className="latest-blog-container mt-28">            
            <h2 className="px-5 mb-3 font-medium uppercase tracking-widest">latest blog posts</h2>
            <LatestBlogPosts/>          
        </section>
        </>
    );
};

export default LatestBlog;