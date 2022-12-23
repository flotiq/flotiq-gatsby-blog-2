import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Pagination } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import HomepageSidebar from '../sections/HomepageSidebar';
import Footer from '../components/Footer';
import BlogCards from '../sections/BlogCards';

const IndexPage = ({ data, pageContext }) => {
    const posts = data.allBlogpost.nodes;
    return (
        <Layout additionalClass={['']}>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={data.site.siteMetadata.description}
                />
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <HomepageSidebar
                    headerText1="About"
                    headerText2="this"
                    headerText3="blog"
                    subheaderText="Hi, this is minimal theme for your personal blog.
                    With rich media Use this theme and make it special!"
                    paragraphText="Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                    buttonLabel="SAY HI!"
                />
                <div className="lg:col-span-2 xl:col-span-3 p-5 md:p-10 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                        <BlogCards posts={posts} />
                    </div>
                    <Pagination page={pageContext.currentPage} numOfPages={pageContext.numPages} rounded="none" />
                </div>
            </div>
            <Footer additionalClass={['md:hidden']} />
        </Layout>
    );
};

export const pageQuery = graphql`
query indexQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allBlogpost(
      sort: {flotiqInternal: {createdAt: DESC}}
      limit: $limit
      skip: $skip
    ) {
      nodes {
        headerImage {
          extension
          url
          width
          height
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
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
