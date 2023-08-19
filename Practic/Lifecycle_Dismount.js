import axios from 'axios';
import React, { useEffect, useState } from 'react'
 // a component didmount methord are we using when we are calling the data from api are fetchig
 // data from far way 
const Lifecycle_Dismount = () => {
   const [data,setData]=useState({});
   console.log(data); 
   let mydata=async()=>{
         await     fetch("https://hn.algolia.com/api/v1/search?query=html").then((res)=>{
            res.json();
       }).then((data)=>{
            setData(data);
       })
    }
   useEffect(()=>{
     mydata();
    },[])
    return (
 <div>
 {data.map((mydata)=>{
     return(
         <>
    
         </>
     )
 })}
 </div>
  )

    }
export default Lifecycle_Dismount