import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/SEO"

export const query = graphql`
  query(
    $slug: String!
  ){
    contentfulBlog(
      slug:{
        eq:$slug
      }
    ){
      title
      slug
      date(formatString:"MMMM Do, YYYY")
      description{
        json
      }
      image{
        file {
          url
        }
        title
        fixed {
          base64
          tracedSVG
          aspectRatio
          srcWebp
          srcSetWebp
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }


  return (
    <Layout>
      <SEO
            title={props.data.contentfulBlog.title}
            description="Insper Mileage post"
            lang="pt-br"
            meta={[
                `Insper`,
                `post`,
                `Insper Mileage`,
            ]}
        />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="post">
          <h1 class="title">{props.data.contentfulBlog.title}</h1>
          <h2 class="subtitle">{props.data.contentfulBlog.date}</h2>
            <img src ={props.data.contentfulBlog.image.file.url} />
            
          
          {documentToReactComponents(props.data.contentfulBlog.description.json,options)}
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default Blog
