import React, { useState } from 'react'
const MovieList = () => {
   const [Movies,setmovie]=useState([
     {
       id:1,
        title:'malena',
         year:2000,
          director:'frank',
           genre:'lovestory',
     },
     {
      id:1,
       title:'malena',
        year:2000,
         director:'frank',
          genre:'lovestory',
    },
    {
      id:1,
       title:'malena',
        year:2000,
         director:'frank',
          genre:'lovestory',
    }

      
   ]); 
    const addMovie=()=>{
       const newMovie={
         id:Movies.length+1,
          title:'newmoview',
           year:'',
            director:'',
            genre:'',
       };
        setmovie(...Movies,newMovie);
    }
     const deletemovie=(id)=>{
       setmovie(Movies.filter((movie)=>movie.id!==id));
     };
    const handleInputChange=(id,field,value)=>{
      const updatedMovies=Movies.map((movie)=>{
        if(movie.id==id){
          return {
            ...movie,[field]:value,
          };
        }
         return movie;
     });
      setmovie(updatedMovies);
    }
  return (
     <>
      <button onClick={addMovie}>AddMovie</button>
       <table>
         <thead>
           <tr>
             <th>Title</th>
             <th>Year</th>
             <th>director</th>
             <th>genre</th>

           </tr>
         </thead>
          <tbody>
             {Movies.map((movie)=>(
                   <tr key={movie.id}>
                     <td>
                       <input type='text' value={movie.title} onChange={(e)=>handleInputChange(movie.id,'title',e.target.value)}/>

                     </td>
                      <td>
                         <input type={'text'} value={movie.year} onChange={(e)=>{ handleInputChange(movie.id,'year',e.target.value)}}/>
                          
                      </td>
                      <td>
                      <input type={'text'} value={movie.director}  onChange={(e)=>{handleInputChange(movie.id,'director',e.target.value)}}/>
                      </td>
                       <td>
                         <input type={'text'} value={movie.genre} onChange={(e)=>{handleInputChange(movie.id,'genre',e.target.value)}}/>
                       </td>

                       <td>
                <button onClick={() => deletemovie(movie.id)}>Delete</button>
              </td>
                   </tr>
             ))}
          </tbody>
       </table>
      
     </>
  )
}

export default MovieList