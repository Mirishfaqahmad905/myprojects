import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './article.css';

const ApiKey="92b14237783f45799d5f2fb3679dc671";
 
const Article = () => {
    const [articles, setArticles] = useState([]);
 
    useEffect(() => {
   fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`)
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles);
            });
        
        }, [])

    return (
        <>
            <div className='card-container-css'>
                  {articles.map((item)=>(
                     <div key={item.title}>
                         <div className='card-title'>
                             <h2>{item.title}</h2>
                         <img src={item.urlToImage} />
                         </div>
                         <div className='card-desc'>
                             <p>{item.description}</p>
                         </div>
                     </div>
                  ))}
            </div>
        </>
    )
}

export default Article;
