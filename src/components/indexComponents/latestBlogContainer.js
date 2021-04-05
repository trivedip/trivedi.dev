import React from 'react';
import LatestBlogPosts from './latestBlogPosts'

const LatestBlog = () =>{
    return(
        <>
        <section className="latest-blog-container mt-40">            
            <div className="px-5 font-medium uppercase tracking-widest">latest &nbsp;&nbsp; POSTS</div>
            <LatestBlogPosts/>          
        </section>
        </>
    );

};

export default LatestBlog;