import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContent from "../components/blog/blog_content"
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import BlogCard from "../components/blog/blog_card";
import { Link } from "gatsby"
import { graphql } from "gatsby"
import "../styles/scss/main.scss"

const Blog = ({data: {allContentfulBlogPost}}) => (
  <Layout>
    <SEO title="Blog" /> 
    <div className="crumbs_wrap">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={() => {}}>
            Главная
          </Link>
          <Typography color="textPrimary">Блог</Typography>
        </Breadcrumbs>
      </div>

    <BlogContent />

    {allContentfulBlogPost.edges.map(({node}) => (
       <BlogCard
          node={{...node, slug: `posts/${node.slug}`}}
          key={node.id}
       />
    ))}

  </Layout>
)


export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        image {
          file {
            fileName
            url
          }
        }
        title
      }
    }
  }
}
`;

export default Blog