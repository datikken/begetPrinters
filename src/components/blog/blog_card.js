import React from 'react'
import { Link } from 'gatsby' 

export default function BlogCard({ node: { title, createdAt, slug, category, created, image } }) {

    return (
        <div>
            <p>{title}</p>
            <p>{createdAt}</p>
            <p>{category}</p>
            <p>{created}</p>
            <Link to={`blog/${slug}`}>{slug}</Link>
            <img src={image.file.url} />
        </div>
    )
}
