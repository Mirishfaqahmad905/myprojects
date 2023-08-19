import React, { useEffect, useState } from 'react'

const Spread = () => {
     const [state,setState]=useState();
       const a=[2,3,4];
       const b=[4,9,0];
       useEffect(()=>{
        //   setState({...a,c:[12,13,17]});
         // Clone the Data
          
          setState({...a});

       },[])
         useEffect(() => {
               console.log(state);
           
         }, [state])
          const SubmitHanlder=(e)=>{
             e.preventDefault();
               console.log(state);
          }
            const InputHandler=(e)=>{
                 setState()
            }
             const Change=(e)=>{
                 setState({...state,[e.target.name]:e.target.email});
             }
  return (
    <form  onSubmit={SubmitHanlder}>
         <input type={'text'} name={'text'}/>
         <input type={'text'} name={'name'} onChange={Change} />
         <input type={'text'} name={'email '} onChange={Change} />
          <input type={'submit'} />
    </form>
  )
}

export default Spread