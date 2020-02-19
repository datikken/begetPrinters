import React from 'react'

export default function BlogCard({ node: { title, slug, image, description } }) {

    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <img src={image.file.url} />
        </div>
    )
}
