import React from 'react';
import { Image } from 'flotiq-components-react';
import Logo from '../assets/blog-logo.svg';

const HomepageSidebar = () => (
    <div className="bg-white">
        <div className="flex items-center justify-center bg-primary">
            <Image url={Logo} additionalClasses={['h-24']} />
        </div>
    </div>
);

export default HomepageSidebar;
