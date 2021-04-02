import React from 'react';
import Header from './header'
import { ThemeProvider  } from './ThemeContext';
import GlobalStyles from '../css/styled';
import PropTypes from 'prop-types';
import Background from './animatedBackground';

const Container =({children}) => {
    return (
        <ThemeProvider>
            <GlobalStyles />   
            <Background/>
            <div>
            <Header className="max-w-screen-xl mx-auto"/>
            <div className="m-auto px-5 mt-16 sm:px-12 md:px-20 max-w-screen-xl">
            {children}
            </div>
            </div>
        </ThemeProvider>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;