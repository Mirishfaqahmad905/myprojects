import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { fetch } from 'whatwg-fetch';
import Footer from '../Footer';
import './Css/Contact.css';

const Contact = () => {
  const [input, setInput] = useState({
    name:'',email:'',message:''
  });
  const [getData, setGetData] = useState({
    name:'',email:'',message:''
  });
 console.log(getData.Object);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:2000/client/get');
        const data = await response.json();
        setGetData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  console.log(getData);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.message) {
      window.alert('make sure you are enter data first');
      return false;
    } else {
      axios
        .post('http://localhost:2000/client/messages', {
          name: input.name,
          email: input.email,
          message: input.message,
        })
        .then((response) => {
          if (response.data.message === 'Data entered successfully') {
            window.alert('Your query are sent to Us');
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className='contact-parent'>
      <h1>Get in touch with us </h1>
        <div className='desc'>
          <p>
            Hello Everyone! Have a great day :) I am here to help you. If you want to know something or you have any suggestion then please mail me. Thank You.
          </p>
        </div>
      </div>
      <div className='contact-child-1'>
        <form onSubmit={submitHandler}>
          <h3>Connect with us   </h3>
          <hr />
          <label>Name</label>
          <input type='text' name='name' onChange={changeHandler} placeholder='Enter your Name' />
          <label>Email</label>
          <input type='email' name='email' onChange={changeHandler} placeholder='Enter your email' />
          <label>Your messages </label>
          <textarea type='text' name='message' onChange={changeHandler} placeholder='Enter your password' />

          <input id='submit' type='submit' value='Send Message' />
        </form>
        {Array.isArray(getData) ? (
  <nav className='contact-list-message'>
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td>email</td>
        </tr>
        <tbody>
          {getData.map((item, index) => (
            <>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </>
          ))}
        </tbody>
      </table>
    </div>
  </nav>
) : null}

      </div>
      <Footer />
    </div>
  );
};

export default Contact;
