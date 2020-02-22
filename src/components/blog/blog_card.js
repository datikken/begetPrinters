import React from "react"
import { Link } from "gatsby"
import TextBtn from "../btn/text_btn"
import Like from "../like/like"
import Comments from "../comments/comments"

export default function BlogCard({
  node: { title, createdAt, slug, category, created, image, description,shortDescription },
}) {

  return (
    <Link to={`blog/${slug}`} className="blog_card">
      <img src={image.file.url} alt="Blog" />

      <p className="blog_card-title">{title}</p>
  
      <div className="blog_card-info">
        <p className="blog_card-info_cat">{category}</p>
        <p className="blog_card-info_date">{createdAt}</p>
        <p className="blog_card-info_created">Опубликовано {created}</p>
      </div>

      <p className="blog_card-desc">{shortDescription}</p>

      <div className="blog_card-actions">
        <TextBtn text="Читать далее" />
        <Like amount="8" />
        <Comments amount="8" />
      </div>
      
    </Link>
  )
}
