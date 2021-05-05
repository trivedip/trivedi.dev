import React from 'react';
import RecentExperience from './recentExperience';
import {BsArrowRight} from 'react-icons/bs';
import {Link} from 'gatsby';
const Experience = () =>{
    return(
        <>
        <section className="latest-blog-container mt-20">            
            <div className="px-5 mb-3 font-medium uppercase tracking-widest">Recent Experience</div>
            <RecentExperience/>  
            <Link to="/about/#exp-list"  className="mb-3 not-sr-only md:mx-5 p-1 text-lg duration-150 transform hover:scale-105 mt-5" style={{border:'1px solid var(--color-gray700)',display:'block',width:'max-content'}}>Complete list of experience <BsArrowRight className="fill-current" style={{display:'inline-block',transform:'scale(1.3)',marginTop:'-4px'}}/></Link>          
        </section>
        </>
    );

};

export default Experience;