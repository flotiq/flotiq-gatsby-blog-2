import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import BlogPostSidebar from '../sections/BlogPostSidebar';
import Logo from '../assets/blog-logo.svg';

const BlogPostTemplate = ({ data }) => {
    const post = data.blogpost;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <div className="flex flex-wrap">
                <BlogPostSidebar logo={Logo} additionalClass={['w-full md:basis-auto md:w-[130px]']} />
                <div className="basis-full md:basis-auto md:pl-[130px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut vehicula ante malesuada, maximus dolor quis, commodo neque.
                    Sed volutpat feugiat dapibus. Morbi ultricies mi in neque vehicula
                    pellentesque. Sed gravida eros tellus, vitae finibus magna semper
                    non. Etiam eu leo nec orci scelerisque vestibulum id in quam. Etiam
                    ultricies non enim sit amet consequat. Maecenas lobortis vitae leo
                    eget congue. Sed nibh sem, consequat ut placerat id, elementum non
                    tellus. Pellentesque ac faucibus ligula. Quisque eget vehicula nisi.
                    Donec eget eros non lectus hendrerit iaculis ut id purus. Sed iaculis
                    neque ut felis efficitur maximus. Sed eros orci, sodales maximus
                    tincidunt vehicula, luctus a orci. Morbi vitae ultrices nisi.
                    Aenean quis ex eget quam vulputate tincidunt. Ut sit amet sapien
                    dictum, sollicitudin arcu et, facilisis libero.
                </div>
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
