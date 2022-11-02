import React from 'react';
import { PoweredByFlotiq } from 'flotiq-components-react';

const Footer = ({ additionalClass = [] }) => (
    <footer className={['flex justify-center w-full', ...additionalClass].join(' ')}>
        <div className="font-inter w-auto px-2 md:px-5 py-5 mt-7 md:mt-15
                inline-flex justify-between md:justify-center items-center
                bg-light-gray rounded-t-lg"
        >
            <PoweredByFlotiq />
            <p className="text-center text-xs md:text-base font-light">
                Copyright &copy; Flotiq
                {' '}
                {new Date().getFullYear()}
            </p>
        </div>
    </footer>
);

export default Footer;
