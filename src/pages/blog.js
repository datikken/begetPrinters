import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import BlogCard from "../components/blog/blog_card"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import "../styles/scss/main.scss"

const Blog = ({data: {allContentfulBlogPost}}) => {
  return (
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
  
      <div className="blog">
          <div className="blog_wrap">
              <div className="blog_wrap-menu">
                  <div className="blog_wrap-menu_item">
                      <span className="blog_wrap-menu_item-inner">Картриджи</span>
                  </div>
                  <div className="blog_wrap-menu_item">
                      <span className="blog_wrap-menu_item-inner">Принтеры</span>
                  </div>
                  <div className="blog_wrap-menu_item">
                      <span className="blog_wrap-menu_item-inner">Жизнь в офисе</span>
                  </div>
                  <div className="blog_wrap-menu_item">
                      <span className="blog_wrap-menu_item-inner">Экология</span>
                  </div>
              </div>
          </div>
      </div>
  
      <div className="blog_content">
          {allContentfulBlogPost.edges.map(({node}) => (
            <BlogCard
                node={{...node, slug: `${node.slug}`}}
                key={node.slug}
            />
          ))}
      </div>
      
    </Layout>
  )
};

export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        title
        createdAt(formatString: "DD.MM.YYYY")
        slug
        image {
          file {
            fileName
            url
          }
        }
        category
        published(difference: "")
        created
        shortDescription
      }
    }
  }
}
`;

export default Blog