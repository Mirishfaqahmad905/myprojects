import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const ApiKey="92b14237783f45799d5f2fb3679dc671";

    const [data,setdata]=useState();
    useEffect(()=>{
    async function FetchData(){
        const data= await   fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`);
                       const resp=data.json();
                        setdata(resp);
    }
     FetchData();
},[]);
    FetchData();
      
          console.log(data.data);

  return (
    <div>FetchApi</div>
  )
}

export default FetchApi