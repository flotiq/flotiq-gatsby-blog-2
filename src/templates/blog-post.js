import React from 'react';
import { graphql } from 'gatsby';
import { Image, Header, Content } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';

const readingTime = '7min';
const tags = ['#photo', '#cookig', '#food'];
const postAuthor = 'John Doe';

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.blogpost;
    return (
        <Layout additionalClass={['']}>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <div className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
                <Image
                    url={post.headerImage[0] && post.headerImage[0].localFile.publicURL}
                    stretched
                    alt={post.title}
                />
                <div className="px-6 md:px-12 flex flex-wrap items-center justify-between font-light">
                    <div className="basis-full md:basis-1/2 flex flex-wrap
                    items-center justify-center md:justify-start space-x-6"
                    >
                        <p>
                            Date:
                            {post.date}
                        </p>
                        <p>
                            Reading Time:
                            {readingTime}
                        </p>
                        <div />
                    </div>
                    <div className="mt-4 md:mt-0 basis-full md:basis-1/2
        flex flex-wrap items-center justify-center md:justify-end space-x-6 md:space-x-8"
                    >
                        {tags && tags.map((tag) => (
                            <a
                                href="/"
                                className="hover:text-secondary"
                                key={tag}
                            >
                                {tag}
                            </a>
                        ))}
                    </div>
                </div>
                <Header text={post.title} alignement="center" additionalClasses={['px-4 md:px-12 pt-10 pb-10']} />
                <Content
                    blocks={post.content.blocks}
                    additionalClasses={['px-4 md:px-12 text-sm md:text-lg']}
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
                            captionAdditionalClasses: ['bg-primary rounded px-8 py-1.5 opacity-100'],
                        }
                    }
                    paragraphProps={{ additionalClasses: ['font-light'] }}
                />
                <Header text={postAuthor} />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        blogpost( slug: { eq: $slug } ) {
            id
            title
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
            flotiqInternal {
                createdAt
            }
            content {
                blocks {
                    data {
                        alignment
                        anchor
                        caption
                        code
                        content
                        extension
                        fileName
                        height
                        items {
                            content
                            items {
                                content
                                items {
                                    content
                                    items {
                                        content
                                        items {
                                            content
                                            items {
                                                content
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        level
                        message
                        stretched
                        style
                        text
                        title
                        url
                        width
                        withBackground
                        withBorder
                        withHeadings
                    }
                    tunes {
                        alignmentTuneTool {
                            alignment
                        }
                    }
                    type
                }
            }
        }
    }
`;

export default BlogPostTemplate;
