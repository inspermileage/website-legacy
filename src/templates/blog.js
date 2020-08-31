import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/SEO"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      image {
        fixed(width: 300, height: 300) {
          base64
          src
          srcSet
          height
          width
        }
      }
      description {
        json
      }
    }
  }
`

const Blog = props => {
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
      <SEO title={props.data.contentfulBlog.title} />
      <h1>{props.data.contentfulBlog.title}</h1>
      <div>
        <Img class="img"
        fixed={props.data.contentfulBlog.media.fixed}/>
      </div>
      <p>{documentToReactComponents(
        props.data.contentfulBlogjson,
        options
      )}</p>
    </Layout>
  )
}

export default Blog
