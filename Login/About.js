import Welcom from './Welcom';
import React,{useState} from 'react';
import axios from 'axios';

const About = (props) => {
  const [data, setData] = useState({});
  const [err, setErr] = useState(null);

  const submitHandler = (e) => {
    console.log(data);
    e.preventDefault();     
    axios.get('http://localhost:2000/get/data', {
      params: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    }).then((res) => { console.log(res.data);
       if(res.data.message=='you are logged in ')
 
          
          setErr(res.data.message);
          window.alert(res.data.message); 
           window.location.href="./Dashboard";     
      
         
  
    });  
  };

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input type="text" name="name" onChange={onChangeHandler} />
          <input type="email" name="email" onChange={onChangeHandler} />
         
          <input type="submit" value="submit" />
        </form>

        {err === 'you are logged in' ? (
          <Welcom name={data.name} email={data.email}  />
        ) : err === 'you are not logged in, create an account' ? (
          <h2>{window.location.href='./home'}</h2>
        ) : (
          
          <h2>Loadding </h2>
        )}
      </div>
    </>
  );
};

export default About;
