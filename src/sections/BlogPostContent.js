import React from 'react';
import { Content, Header, Image } from 'flotiq-components-react';

const BlogPostContent = ({ post, date, readingTime, tags, postAuthor, additionalClass }) => (
    <div className={['', ...additionalClass].join(' ')}>
        <Image
            url={post.headerImage[0] && post.headerImage[0].localFile.publicURL}
            stretched
            alt={post.title}
        />
        <div className="px-5 md:px-10 lg:px-16 py-8">
            <div className="flex flex-wrap items-center justify-start font-light lg:space-x-20">
                <div className="basis-full lg:basis-auto flex flex-col lg:flex-row flex-wrap
                    items-center justify-center lg:justify-start lg:space-x-8 mb-5 lg:mb-0"
                >
                    <p>
                        {date}
                    </p>
                    <p>
                        {readingTime}
                        {' '}
                        read
                    </p>
                    <div />
                </div>
                {/* <div className="mt-4 mx-0 md:mt-0 basis-full lg:basis-auto */}
                {/* flex flex-wrap items-center justify-center lg:justify-end space-x-6 */}
                {/* text-primary font-normal" */}
                {/* > */}
                {/*    <p> */}
                {/*        tags: */}
                {/*    </p> */}
                {/*    {tags && tags.map((tag) => ( */}
                {/*        <a */}
                {/*            href="/" */}
                {/*            className="hover:text-secondary underline" */}
                {/*            key={tag} */}
                {/*        > */}
                {/*            {tag} */}
                {/*        </a> */}
                {/*    ))} */}
                {/* </div> */}
            </div>
            <Header
                alignement="center"
                additionalClasses={['pt-10 pb-10 uppercase text-center lg:text-left']}
            >
                {post.title}
            </Header>

            <Content
                blocks={post.content.blocks}
                additionalClasses={['text-sm md:text-lg']}
                fileProps={{
                    audioProps: { additionalClasses: ['px-6 md:px-12 w-full md:w-3/5 mx-auto'] },
                    imageProps: {
                        additionalClasses: ['w-full md:w-9/12 m-auto'],
                        rounded: '3xl',
                        captionAdditionalClasses: ['w-full md:w-9/12 m-auto'],
                    },
                }}
                quoteProps={
                    {
                        variant: 'dark',
                        additionalClasses: ['px-12 md:px-28 py-4'],
                        captionAdditionalClasses: ['bg-primary px-8 py-1.5 opacity-100 not-italic font-semibold'],
                    }
                }
                paragraphProps={{ additionalClasses: ['font-light'] }}
            />
            <div className="font-semibold mt-10 pb-10 border-b-2 border-gray/40">
                Author:
                {' '}
                {postAuthor}
            </div>
        </div>
    </div>
);

export default BlogPostContent;
