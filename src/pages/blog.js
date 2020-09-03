import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import {Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


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
      <section class="section">
        <div class = "hero-body">
        <div class="hero is-medium">
          <div class="container">
            <ol>
              {data.allContentfulBlog.edges.map((edge)=>{
                 return(
                  <li>
                    <Link to={`/blog/${edge.node.slug}`}>
                      <h2>{edge.node.title}</h2>
                      <p>{edge.node.date}</p>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage
