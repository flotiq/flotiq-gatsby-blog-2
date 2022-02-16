import React from 'react';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-lato', 'bg-light-gray', ...additionalClass].join(' ')}>
        {children}
    </main>
);

export default Layout;
