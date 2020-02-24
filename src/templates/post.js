import React from "react"
import Layout from "../components/layout"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link } from "gatsby"

export default function Post({ data }) {
  return (
    <Layout>
      <div className="crumbs_wrap">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link color="inherit" to="/" onClick={() => {}}>
            Главная
          </Link>
          <Link color="inherit" to="/blog" onClick={() => {}}>
            Блог
          </Link>
          <Typography color="textPrimary">
            {data.contentfulBlogPost.slug}
          </Typography>
        </Breadcrumbs>
      </div>

      <article className="blog_article">
        <h1 className="blog_article-heading">
          {data.contentfulBlogPost.title}
        </h1>
        <img
          className="blog_article-image"
          src={data.contentfulBlogPost.image.file.url}
          alt="Post"
        />
        <div className="blog_article-description">
          {documentToReactComponents(
            data
              .contentfulBlogPost
              .childContentfulBlogPostDescriptionRichTextNode.json
          )}
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query lessonQuery($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      createdAt
      childContentfulBlogPostDescriptionRichTextNode {
        json
      }
      image {
        file {
          fileName
          url
        }
      }
      category
      slug
      published(difference: "")
      created
    }
  }
`
