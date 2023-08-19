import React, { useEffect, useState } from 'react';
 
const quotes = () => {
 
   const [quotes,setquotes]=useState([]);
      useEffect(()=>{
         const api=async ()=>{
            if(!api.ok){
                  throw new Error('the api are returning the error ');
            }
             else 
              {
              const myquotes=await api.json();
                setquotes(myquotes);
            }
             
        }
         api();
      })
    return (
        <div className='quotes'>
        <h2>Quotes</h2>
        {quotes.length === 0 ? (
          <p>Loading...</p>
        ) : (
          quotes.map((quote, index) => (
            <ul key={index}>
              <li>{quote.name}</li>
            </ul>
          ))
        )}
      </div>
  )
}

export default quotes