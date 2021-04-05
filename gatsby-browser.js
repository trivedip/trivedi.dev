import React from 'react';
import Container from './src/components/sitewideComponents/container';
import "./src/css/style.css";
import "tailwindcss/dist/base.min.css";
export const wrapRootElement = ({ element }) => {
    return <Container>{element}</Container>;
  };