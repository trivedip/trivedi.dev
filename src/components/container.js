import React from 'react';
import Header from './header'
import { ThemeProvider  } from './ThemeContext';
import GlobalStyles from '../css/styled';
import PropTypes from 'prop-types';
const Container =({children}) => {
    return (
        <ThemeProvider>
            <GlobalStyles />   
            <div className="page-background">
                <div className="background-ele"></div>    
            </div>         
            <Header className="max-w-screen-xl mx-auto"/>
            <div className="max-w-screen-xl mx-auto">
            {children}
            </div>
            <div className="background-tester"></div>
        </ThemeProvider>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;