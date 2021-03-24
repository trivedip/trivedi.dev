import React from 'react';
import Header from './header'
import { ThemeProvider } from "styled-components";
import styled from 'styled-components';
import { useState } from "react";

const LightTheme={
    pageBackground:"white",
    titleColor:"black",
    tagLineColor:"black"
}
const DarkTheme={
    pageBackground:"black",
    titleColor:"white",
    tagLineColor:"white"
    
}

const themes={
    light:LightTheme,
    dark:DarkTheme
}

const Page = styled.div`
    background-color: ${props=>props.theme.pageBackground};
    height: 100vh;
    width:100%
`;

const Container =({children}) => {
    const [theme,setTheme] = useState("light");
    return (
    <ThemeProvider theme={themes[theme]}>
        <Page  >
            <div>
            <div theme={theme} className="container" >
                {/* <Header/> */}
                <Header theme={theme} setTheme={setTheme} />
                <main className="main">{children}</main>
            </div>
        </div>
       </Page>
    </ThemeProvider>
    )
}

export default Container;