import React from 'react';
import { Button, Header, Image, Paragraph, PoweredByFlotiq } from 'flotiq-components-react';
import Logo from '../assets/blog-logo.svg';
import SocialIcons from '../components/SocialIcons';

const HomepageSidebar = ({
    headerText1, headerText2, headerText3, subheaderText, paragraphText, buttonLabel,
}) => (
    <div className="bg-white flex flex-col justify-between">
        <div>
            <div>
                <div className="hidden md:flex items-center justify-center bg-primary py-20 lg:py-28">
                    <Image url={Logo} additionalClasses={['h-20 lg:h-24']} alt="Logo" />
                </div>
            </div>
            <div className="flex flex-col px-10 py-5 md:py-24 font-bold">
                <div className="hidden md:block">
                    <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest mb-1 uppercase">
                        {headerText1}
                    </Header>
                    <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest mb-1 uppercase">
                        {headerText2}
                    </Header>
                    <Header className="p-0 !text-3xl lg:!text-4xl tracking-widest uppercase">
                        {headerText3}
                    </Header>
                </div>
                <Header className="mt-5 md:mt-14 !text-base lg:!text-lg !font-normal" level={4}>
                    {subheaderText}
                </Header>
                <Paragraph className="mt-8 md:mt-10 !text-sm lg:!text-base !font-light">
                    {paragraphText}
                </Paragraph>
                <Button
                    label={buttonLabel}
                    size="lg"
                    rounded="none"
                    additionalClasses={['w-fit mx-auto md:mx-0 py-5 lg:!px-14 mt-10']}
                    onClick={() => window.open('mailto:hello@flotiq.com')}
                />
            </div>
        </div>
        <div>
            <div className="mt-8 mb-8 md:mb-0 flex justify-center space-x-2">
                <SocialIcons />
            </div>
            <div className="hidden md:flex justify-between items-center w-full
            px-5 py-5 mt-7 md:mt-15 rounded-t-xl bg-light-gray"
            >
                <PoweredByFlotiq />
                <p className="text-center text-sm font-light">
                    Copyright &copy; Flotiq
                    {' '}
                    {new Date().getFullYear()}
                </p>
            </div>

        </div>
    </div>
);

export default HomepageSidebar;
