import React from 'react';
 import {Link} from 'react-router-dom';

const Links = () => {
  return (
 <>
 <ul>
     <li> <Link to={'/home'}>Home </Link></li>
     <li> <Link to={'/about'}>About </Link></li>
     <li> <Link to={'/Contact'}>Contact  </Link></li>
 </ul>
 </>
  )
}

export default Links