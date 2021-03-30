import React from 'react';
import Header from './header'
import { ThemeProvider  } from './ThemeContext';
import GlobalStyles from '../css/styled';
import PropTypes from 'prop-types';
const Container =({children}) => {
    const root = window.document.documentElement;
    console.log(root);
    return (
        <ThemeProvider>
            <GlobalStyles />            
            <Header  />
            {children}
        </ThemeProvider>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;