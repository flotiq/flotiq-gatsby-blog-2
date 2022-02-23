import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import Layout from '../layouts/layout';
import BlogPostSidebar from '../sections/BlogPostSidebar';
import Logo from '../assets/blog-logo.svg';
import BlogPostContent from '../sections/BlogPostContent';

const readingTime = '7 min';
const tags = ['#photo', '#cookig', '#food'];
const postAuthor = 'John Doe';

const BlogPostTemplate = ({ data }) => {
    const post = data.blogpost;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <div className="flex flex-wrap">
                <BlogPostSidebar
                    logo={Logo}
                    additionalClass={['w-full md:basis-auto md:w-[130px]']}
                />
                <BlogPostContent
                    post={post}
                    date={moment(post.flotiqInternal.createdAt).format(' Do MMMM yyyy')}
                    readingTime={readingTime}
                    tags={tags}
                    postAuthor={postAuthor}
                    additionalClass={['']}
                />
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
