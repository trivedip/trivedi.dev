import React from 'react';
// import { Link,graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"


const About = () => {
  
    return(
        <>
          <span>
            <div className="img" style={{backgroundColor:'skyblue',width:"40%"}}>
              <StaticImage imgClassName="img" style={{}} placeholder="blurred" src="./assets/image/img1.jpg"></StaticImage>              
            </div>
          </span>
        </>
    );
    
};

export default About;

