import React from 'react';
import LatestBlogPosts from './latestBlogPosts'

const LatestBlog = () =>{
    return(
        <>
        <section id="down" className="latest-blog-container mt-40">            
            <div className="px-5 mb-3 font-medium uppercase tracking-widest">latest blog posts</div>
            <LatestBlogPosts/>          
        </section>
        </>
    );
};

export default LatestBlog;