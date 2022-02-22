import React from 'react';
import { Image } from 'flotiq-components-react';

const BlogPostSidebar = ({ logo }) => (
    <div className="grid-col-1 bg-primary">
        <div className="flex">
            <div className="w-full flex items-center justify-center bg-primary py-8">
                <Image url={logo} additionalClasses={['h-14']} />
            </div>
        </div>
    </div>
);

export default BlogPostSidebar;
