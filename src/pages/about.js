import React from 'react';
import { Link,graphql } from "gatsby";
import Container from "../components/container";
import { StaticImage } from "gatsby-plugin-image"
import wall from "./assets/image/img.jpeg";


const About = () => {
  
    return(
        <Container>
          <h1>Hello there from Priyank</h1>
          {/* <StaticImage src="./assets/image/img.jpeg"></StaticImage> */}
          <StaticImage src="./assets/image/img1.jpg"></StaticImage>
        </Container>
    );
    
};

export default About;

