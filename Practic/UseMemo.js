import React, { useMemo } from 'react'

const UseMemo = ({data}) => {
  const memoization=useMemo(()=>{
      return  generateitem(data);
  },[data]);
   return <MyListe item={memoization}/>
     
}

export default UseMemo