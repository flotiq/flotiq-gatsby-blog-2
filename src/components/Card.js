import React from 'react';
import { Link } from 'gatsby';
import { Card } from 'flotiq-components-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CustomCard = ({ title, excerpt, date, readingTime, tags, image }) => (
    <Card
        bordered={false}
        rounded="none"
        additionalClasses={['mb-4 cursor-pointer border-b-4 border-primary shadow-lg']}
    >
        <GatsbyImage image={getImage(image)} alt={title} imgClassName={['order-1 lg:order-2']} />
        <Card.Body
            additionalClasses={[
                'flex flex-col items-start justify-between order-2 lg:order-1 px-5 pt-10 pb-5',
            ]}
        >
            <div className="flex flex-wrap justify-start text-sm font-light mb-3 space-x-5">
                {tags && tags.map((tag) => (
                    <Link
                        to="/"
                        className="flex items-center justify-center text-sm
                       font-light text-primary font-normal"
                        key={tag}
                    >
                        {tag}
                    </Link>
                ))}
            </div>
            <Card.Title additionalClasses={['uppercase !text-2xl line-clamp-1']}>
                {title}
            </Card.Title>
            <Card.Text additionalClasses={['line-clamp-4 mt-5']}>
                {excerpt}
            </Card.Text>
            <div className="flex flex-wrap justify-between text-sm md:text-xs xl:text-sm font-light text-gray mt-5">
                <p className="mr-5">
                    {date}
                </p>
                <p>
                    {readingTime}
                    {' '}
                    read
                </p>
            </div>
        </Card.Body>
    </Card>
);

export default CustomCard;
