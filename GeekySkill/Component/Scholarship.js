import React from 'react'
import { Link } from 'react-router-dom'
import './Css/Scholarship.css';
const Scholarship = () => {
  return (
    <div>
      <div className='Scholarship-parent'>
         <div className='Scholarship-left-scrolling'>
           <ul>
       <h2 style={{textAlign:'center',background:'#FFF'}}>Filter </h2>
             <li> <Link to={'/Russia'}>Russian</Link> </li>
             <li> <Link to={'/Usa'}>Usa</Link> </li>
             <li> <Link to={'/Finland'}>Finland</Link> </li>
             <li> <Link to={'/Uae'}>UAE</Link> </li>
             <li> <Link to={'/Russia'}>Study in NewZealand</Link> </li>
             <li> <Link to={'/Germany'}>Germaney</Link> </li>
             <li> <Link to={'/'}>Scholarship in Sudia</Link> </li>
             <li> <Link to={'/Usa'}>Scholarship in Sweden</Link> </li>
             <li> <Link to={'/Finland'}>Scholarship in maxico</Link> </li>
             <li> <Link to={'/Uae'}>Scholarship in Japan</Link> </li>
             <li> <Link to={'/Russia'}>Scholarship in China</Link> </li>
             <li> <Link to={'/Germany'}>Cholarship in Korea</Link> </li>

           </ul>
         </div>
          {/* <div className='Scholarship-right-content'>
             <div className='news-page'>
           
                <div className='search-update'>
                   <p>
                      <h2>Hello Every one </h2>
                       <p>
                           We Are Providing The Scholarship Opertunaty to the word Around 
                            Large of people Wan to Study In Out Country We are working with the team group 
                            who are searching and visiting all around the world wide web website to search the 
                            Scholarship  for your 
                             For more 

                       </p>
                   </p>
                </div>
             </div> */}
          </div>
 
    </div>
  )
}

export default Scholarship