import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            date(formatString: "MMMM Do, YYYY")
            slug
            image {
              file {
                url
              }
              fixed(height: 200, width: 350) {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                height
                width
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Blog"
        description="Insper Mileage blog"
        lang="pt-br"
        meta={[`Insper`, `blog`, `Insper Mileage`]}
      />
      <div class="hero-body">
        <h1 class="title is-2 block-title-bw">Postagens</h1>
        <ol class="posts">
          {data.allContentfulBlog.edges.map((edge) => {
            return (
              <li class="post-to-select">
                <OutboundLink>
                  <Link to={`/blog/${edge.node.slug}`}>
                    <div class="columns">
                      <div class="column is-one-third">
                        <h1 class="title">{edge.node.title}</h1>
                        <h2 class="subtitle">
                          algum subtitulo| {edge.node.date}
                        </h2>
                      </div>
                      <div class="column">
                        <Img fixed={edge.node.image.fixed} />
                      </div>
                    </div>
                  </Link>
                </OutboundLink>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default BlogPage;
