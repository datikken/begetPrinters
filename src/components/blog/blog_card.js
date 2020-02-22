import React from "react"
import { Link } from "gatsby"

export default function BlogCard({
  node: { title, createdAt, slug, category, created, image },
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
    </Link>
  )
}
