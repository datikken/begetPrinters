import React from 'react'
import Layout from "../components/layout"

export default function Post({ data }) {
    return (
        <Layout>
            <h1>{data.contentfulBlogPost.title}</h1>
            <img src={data.contentfulBlogPost.image.file.url} alt="Post" />
        </Layout>
    )
}

 export const query = graphql`
  query lessonQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
        title
        createdAt
        image {
          file {
            fileName
            url
          }
        }
        category
        published(difference: "")
        created
    }
  }
`;