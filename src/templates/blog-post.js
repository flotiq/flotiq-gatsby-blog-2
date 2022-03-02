import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { Header } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import BlogPostSidebar from '../sections/BlogPostSidebar';
import Logo from '../assets/blog-logo.svg';
import BlogPostContent from '../sections/BlogPostContent';
import BlogCards from '../sections/BlogCards';
import Footer from '../components/Footer';

const readingTime = '7 min';
const tags = ['#photo', '#cookig', '#food'];
const postAuthor = 'John Doe';
const nextArticleHeaderText = 'Next article to read:';

const BlogPostTemplate = ({ data }) => {
    const post = data.blogpost;
    const posts = data.allBlogpost.nodes;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <div className="flex flex-wrap">
                <div className="flex flex-col md:fixed w-full md:w-[130px]">
                    <BlogPostSidebar
                        logo={Logo}
                        additionalClass={['w-full md:basis-auto md:w-[130px]']}
                    />
                </div>
                <div className="basis-full md:basis-auto md:pl-[130px]">
                    <BlogPostContent
                        post={post}
                        date={moment(post.flotiqInternal.createdAt).format(' Do MMMM yyyy')}
                        readingTime={readingTime}
                        tags={tags}
                        postAuthor={postAuthor}
                        additionalClass={['']}
                    />
                    <div className="px-5 md:px-10 lg:px-16 py-8">
                        <Header
                            level={2}
                            text={nextArticleHeaderText}
                            additionalClasses={['mb-5 uppercase !text-2xl md:!text-3xl']}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            <BlogCards posts={posts} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
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
        allBlogpost(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: 4, filter: {slug: {ne: $slug}}) {
            nodes {
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
                id
                excerpt
                slug
                title
                flotiqInternal {
                    createdAt
                }
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
