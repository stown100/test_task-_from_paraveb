import React from 'react'

function Card({ author, source, description, content, title, url, publishedAt, urlToImage }) {
    return (
        <div className='card'>
            <h5 className='card__title' title={title}>
                {title}
            </h5>
            <p className='card__text'>
                {content}
            </p>
            <div className='card__criteria'>
                <span className='card-author'>
                    {author}
                </span>
                <span className='card-date'>
                    {publishedAt}
                </span>
            </div>
        </div>
    )
}

export default Card