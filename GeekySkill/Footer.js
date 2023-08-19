import React, { useState } from 'react';
import './Component/Css/Footer.css';
import axios from 'axios';

const Footer = () => {
  const [data, setdata] = useState();
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    axios.post('http://localhost:2000/comment/user', {
      comment: data.name,
    }).then((response) => {
      console.log(response.data);
    });
  };
  const HandleChnage = (e) => {
    setdata({ name: e.target.value });
  }
  return (
    <div className='footer'>
      <div className='footer-form'>
        <form onSubmit={HandleSubmit} className='footer-form-top'>
          <textarea rows={'20'} cols={'10'} type={"text"} name="comment" onChange={HandleChnage} id="footer-comment" value="" />

          <input type={'submit'} id="comment-area" value="submit" />
        </form>
      </div>
      <div className='footer-nav-ul'>
        <ul className='footer-ul'>
          <li className='footer-li'>  <a href='https://www.youtube.com/channel/UCX-DpwiTTI9QkfF2CExi8aw'> Youtbe</a>  </li>
          <li className='footer-li'>  <a href=''> Facebook</a>  </li>
          <li className='footer-li'>  <a href='https://web.facebook.com/me/'> Instagrame</a>  </li>
          <li className='footer-li'>  <a href=''> Others </a>  </li>
          <li className='footer-li'>  <a href='#'> MyBlogs </a>  </li>
          <li className='footer-li'>  <a href=''> Earning money  </a>  </li>
          <li className='footer-li'>  <a href='' title='sorry we are not add this page ' > Term And Policy  </a>  </li>
        </ul>
      </div>
      <h2>No CopyWright GeekySkill.com {new Date().getFullYear()}</h2>
    </div>
  )
}

export default Footer