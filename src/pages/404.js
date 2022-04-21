import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'flotiq-components-react';
import Logo from '../assets/Logo.svg';

const NotFoundPage = () => (
    <main className="flex flex-col h-screen justify-center items-center text-light-blue">
        <Helmet>
            <html className="bg-primary" lang="en" />
            <title>Page not found</title>
        </Helmet>
        <div className="text-center mt-5 mb-5">
            <img src={Logo} alt="Flotiq" width="300px" />
        </div>
        <Header>Page not found, sorry</Header>
    </main>
);

export default NotFoundPage;
