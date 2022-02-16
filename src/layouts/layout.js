import React from 'react';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['font-sora', 'px-4', ...additionalClass].join(' ')}>
        {children}
    </main>
);

export default Layout;
