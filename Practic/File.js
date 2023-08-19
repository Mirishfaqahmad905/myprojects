import axios from 'axios';
import React, { useState } from 'react'

const File = () => {
const [file,setFile]=useState(null);
const handleFileChange=(e)=>{
setFile(e.target.files[0]);
}
const handleSubmit=(e)=>{
e.preventDefault();
const formData=new FormData();
formData.append('file',file);
axios.post('http://localhost:200/upload',formData).then((response)=>{
console.log(response);
}).catch((err)=>{
console.log(err);
})
}
return (

   <div>
     <h2>File Upload in react js </h2>
     <form onSubmit={handleSubmit}>
<input type="file" onChange={handleFileChange} />
<button type="submit">Upload</button>
</form>
   </div>
  )
}
export default File;