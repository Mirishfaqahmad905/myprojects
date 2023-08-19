import React, { useEffect, useState } from 'react';
import axios from 'axios';
 


const GetApi = () => {

     const [data,setdata]=useState();
     const ApiKey="92b14237783f45799d5f2fb3679dc671";
     useEffect(()=>{
         axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`).then((res)=>setdata(res.data.articles)).catch((err)=>console.log(err));
          console.log(data);
      },);
  return (
  <div>
  {data ? data.map((article)=>(
      <ul >
           <li key={article.title}>{article.title}</li>
            <li>{article.auther}</li>
             <img src={article.urlToImage}/>
            <li>{article.description}</li>
      </ul>
  )):(<p>Loading </p>)}

  </div>
  )
}

export default GetApi