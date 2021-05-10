import React from 'react';
import Header from './header'
import { ThemeProvider  } from '../ThemeContext';
import GlobalStyles from '../../css/styled';
import PropTypes from 'prop-types';
import Background from './animatedBackground';
import Footer from './footer';


const Container =({children}) => {
    return (
        <>
                <ThemeProvider>
                    <GlobalStyles />   
                    <Background/>
                    <div className="relative z-30">
                    <Header/>
                    <div className="m-auto mt-8">
                        <div className="flex-grow">
                            {children}
                        </div>
                    </div>
                    <Footer/>
                    </div>
                </ThemeProvider>
        </>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;