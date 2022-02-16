import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';

const IndexPage = ({ data, pageContext }) => {
    const posts = data.allBlogpost.nodes;
    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
            </Helmet>
            <div className="grid grid-cols-4">
                <div className="bg-primary">1</div>
                <div className="col-span-3">2</div>
            </div>
            {posts.map((post) => (
                <a href={`/${post.slug}`}><p key={post.id}>{post.title}</p></a>
            ))}
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allBlogpost(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
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
    }
`;

export default IndexPage;
