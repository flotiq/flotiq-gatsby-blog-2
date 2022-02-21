import React from 'react';
import { Button, Header, Image, Paragraph } from 'flotiq-components-react';
import Logo from '../assets/blog-logo.svg';

const HomepageSidebar = ({
    headerText1, headerText2, headerText3, subheaderText, paragraphText, buttonLabel, flotiqLogoBadge, socialIcons,
}) => (
    <div className="bg-white">
        <div className="flex items-center justify-center bg-primary py-28">
            <Image url={Logo} additionalClasses={['h-24']} />
        </div>
        <div className="px-14 py-24 font-bold">
            <Header className="p-0 !text-4xl tracking-widest mb-1 uppercase" text={headerText1} />
            <Header className="p-0 !text-4xl tracking-widest mb-1 uppercase" text={headerText2} />
            <Header className="p-0 !text-4xl tracking-widest uppercase" text={headerText3} />
            <Header className="mt-14 !text-lg !font-normal" text={subheaderText} level={4} />
            <Paragraph className="mt-10 !text-base !font-light" text={paragraphText} />
            <Button
                label={buttonLabel}
                size="lg"
                rounded="none"
                additionalClasses={['py-5 !px-14 mt-10']}
            />
        </div>
        <div className="mt-8 flex justify-center space-x-6">
            {socialIcons.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray hover:text-secondary">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6 hover:text-secondary" aria-hidden="true" />
                </a>
            ))}
        </div>
        <div className="w-full px-5 py-5 mt-7 md:mt-15 rounded-t-xl
                flex justify-between items-center bg-light-gray"
        >
            <div className="flex items-center">
                <img
                    className="block h-4 mr-2"
                    src={flotiqLogoBadge}
                    alt="Flotiq"
                />
                <p className="text-center text-sm font-semibold">
                    Powered by Flotiq
                </p>
            </div>
            <p className="text-center text-sm font-light">
                Copyright &copy; Flotiq 2022
            </p>
        </div>

    </div>
);

export default HomepageSidebar;
