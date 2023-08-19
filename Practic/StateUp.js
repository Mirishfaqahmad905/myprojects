import React  from 'react';
 
// parenet components in react js 
const StateUp = () => {
     const UseHandler=(newData)=>{
         setdata(newData)       
     }
     const [data,setdata]=React.useState('here is some data ');
  return (
           <>
           
            <h2>state up in react js {data}</h2>
             <ChildComponent data={data} onDataChange={UseHandler} />
           </>
  )
}
export default StateUp;
 function  ChildComponent(props){
      return(
        <>
             
          <button  onClick={props.onDataChange('updated data ')} >click to update data</button>
         <h2>Child components in react js </h2>
        </>
      )
 }