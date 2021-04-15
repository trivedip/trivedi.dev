import React from 'react';
import Container from './src/components/sitewideComponents/container';
import { MDXProvider } from "@mdx-js/react";
import "./src/css/style.css";
import "tailwindcss/dist/base.min.css";
const components = {
	wrapper: ({children}) => <>{children}</>
}
// const shortCodes ={}
export const wrapRootElement = ({ element }) => {
    return (<>
    <MDXProvider components={components}>
    <Container>
        {element}
    </Container>
    </MDXProvider>
    </>);
};