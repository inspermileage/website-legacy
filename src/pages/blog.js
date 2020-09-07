import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import {Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/SEO"
import Img from "gatsby-image"
const BlogPage=()=>{
  const data= useStaticQuery(graphql`
    query{
      allContentfulBlog(sort:{fields:date,order:DESC}){
        edges{
          node{
            title
            date(formatString:"MMMM Do, YYYY")
            slug
            image{
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
      }
    }
  `)

  return (
    <Layout>
      <SEO
            title="Blog"
            description="Insper Mileage blog"
            lang="pt-br"
            meta={[
                `Insper`,
                `blog`,
                `Insper Mileage`,
            ]}
        />
        <div class = "hero-body">
        <h1 class="title is-2 block-title-bw">Postagens</h1>
            <ol class= "posts">
              {data.allContentfulBlog.edges.map((edge)=>{
                 return(
                  <li class= "post">
                    <Link to={`/blog/${edge.node.slug}`}>
                      <h2>{edge.node.title}</h2>
                      <p>{edge.node.date}</p>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </div>

    </Layout>
  )
}

export default BlogPage
