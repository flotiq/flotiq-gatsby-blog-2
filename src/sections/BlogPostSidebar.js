import React from 'react';
import { Link } from 'gatsby';
import { Image } from 'flotiq-components-react';
import SocialIcons from '../components/SocialIcons';

const BlogPostSidebar = ({ logo, additionalClass }) => (
    <div className={['bg-white', ...additionalClass].join(' ')}>
        <div className="hidden w-full md:flex items-center justify-center bg-primary py-20 md:h-[30vh]">
            <Link to="/"><Image url={logo} additionalClasses={['h-14 lg:h-18']} /></Link>
        </div>
        <div className="bg-white py-8 flex md:flex-col items-center
            justify-center space-x-2 md:space-x-0 md:space-y-4 md:h-[70vh]"
        >
            <SocialIcons />
        </div>
    </div>
);

export default BlogPostSidebar;
