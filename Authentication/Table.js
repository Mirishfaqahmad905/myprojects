import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './table.css';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2000/table/data').then((res) => {
      setData(res.data);
    });
  }, []);





  const deleteRow = async (id) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      axios.delete(`http://localhost:2000/delete/row/${id}`).then((res) => {
        if (res.data.message === 'Deleted') {
          window.alert('Row deleted successfully');
        }
         else {
          window.alert('Error deleting row');
        }
      });
    }
  }
 const Search=(e)=>{
   const[search,setsearch]=useState('');
    const [mydata,setshowdata]=useState('');  
   e.preventDefault();
    
   useEffect(()=>{
     
     axios.get('http://localhost:2000/search/data',{
       query:search
     }).then((res)=>{
       if(res.data.message=="data found"){
         setshowdata(res.data);
       }
     });
     const ShowData=(e)=>{
        setsearch(e.target.value);
     }
   })
 }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.password}</td>
              <td>
                <Link to={`/table/${row.id}`}>
                  <button onClick={() => deleteRow(row.id)}>Delete</button>
                </Link>
              </td>
              <td>
                <Link to={`/Update/${row.id}`}>
                  <button>Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          
          
    </div>
  );
};

export default Table;
