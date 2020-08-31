import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import SEO from "../components/SEO"

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      media {
        fixed(width: 300, height: 300) {
          base64
          src
          srcSet
          height
          width
        }
        file{
          url
        }
      }
      body {
        json
      }
    }
  }`


const Blog = props => {
//     const data = useStaticQuery(graphql`
//         query {
//             allContentfulBlog(sort: {fields: date, order: DESC}) {
//                 edges {
//                     node {
//                         date(formatString: "MMMM Do, YYYY")
//                         slug
//                         title
//                         image {
//                             id
//                             fixed(height: 10, width: 10) {
//                                 base64
//                                 height
//                                 src
//                                 srcSet
//                                 width
//                             }
//                         }
//                         description {
//                             json
//                         }
//                     }
//                 }
//             }
//         }
//   `)

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }


  return (
    <Layout>
      <SEO title="Blog template" />
      <h1>{props.data.allContentfulBlog.edges.node.title}</h1>
      <div>
        <Img class="img"
        fixed={props.data.allContentfulBlog.edges.node.image.fixed}/>
      </div>
      <p>{documentToReactComponents(
        props.data.allContentfulBlog.edges.node.description.json,
        options
      )}</p>
    </Layout>
  )
}

export default Blog
