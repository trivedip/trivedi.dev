import React from 'react';
import Container from './src/components/container';
import "./src/css/style.css";
import "tailwindcss/dist/base.min.css";
export const wrapRootElement = ({ element }) => {
    return <Container>{element}</Container>;
  };