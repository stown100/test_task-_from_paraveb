import React from 'react';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader'

function Cards({ data }) {
    return (
        <div className='cards'>
            {data
                ? data.map(({ author, source, description, content, title, url, publishedAt, urlToImage }, index) => (
                    <Card author={author} source={source} description={description}
                        content={content} title={title} url={url} publishedAt={publishedAt} urlToImage={urlToImage} key={index} />
                ))
                : <Preloader />
            }
        </div>
    )
}

export default Cards