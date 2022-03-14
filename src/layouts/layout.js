import React from 'react';
import { Helmet } from 'react-helmet';
import MobileHeader from '../components/MobileHeader';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-lato', 'bg-light-gray', ...additionalClass].join(' ')}>
        <Helmet>
            <html lang="en" />
        </Helmet>
        <MobileHeader
            additionalClass={['md:hidden']}
            headerText1="About"
            headerText2="this"
            headerText3="blog"
        />
        {children}
    </main>
);

export default Layout;
