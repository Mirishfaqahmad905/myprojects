import React, { useContext, useState } from 'react'
import ChildTwo from './ChildTwo';
const Mycontext=React.createContext();

const UseContext = () => {
const [data,setdata]=useState('initialdata');
return (
<div>
<Mycontext.Provider value={[data,setdata]}>
<Child />
<ChildTwo/>
</Mycontext.Provider>
</div>
)
}

function Child() {
const [data,setdata]=useContext(Mycontext);
return(
<>
<p>initialdata is {data}</p>
<button onClick={()=>{setdata('updated data ')}}>UpdateData</button>
</>
)
}

export default UseContext;