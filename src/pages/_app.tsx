import '@styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import theme from "../ui/themes/theme";
import React from "react";
import Header from "../ui/components/surfaces/header/Header";
import Footer from "../ui/components/surfaces/footer/Footer";
import {AppContainer} from '@styles/pages/AppContainer.styled';
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {

    const title = pageProps.title ?  `e-diarista -  ${pageProps.title}` : `e-diarista`;


    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ThemeProvider theme={theme}>
                <AppContainer>
                    <Header/>
                    <Component  {...pageProps} />
                    <Footer/>
                </AppContainer>
            </ThemeProvider>
        </>
    )
}

export default MyApp
