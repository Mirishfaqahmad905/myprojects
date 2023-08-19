import React from 'react'

const Redux = () => {
     const inputRef=React.useRef();
     const handleClick=()=>{
        let data= inputRef.current.focus();
         console.log(data);
     }
  return (
    <div>
         <input type={'text'} ref={inputRef}/>
          <button onClick={handleClick}>Focus the input</button>
    </div>
  )
}

export default Redux;