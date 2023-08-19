import React from 'react'
import { Link } from 'react-router-dom';
import "./Css/Course.css";
import Footer from '../Footer';
const Course = () => {
   const Images=[
     { id: 1, Linkes:'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png', Desc:"'Learn from Basic to Advance ',"}, 
     { id: 1, Linkes:'https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg',Desc:'learn from basic to Advance '},
     { id: 1, Linkes:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', Desc:'Learn from Basic to Advance '},
     { id: 1, Linkes:'https://www.simplilearn.com/ice9/free_resources_article_thumb/difference_between_sql_and_mysql.jpg', Desc:'Learn from Basic to Advance '},
     { id: 1, Linkes:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', Desc:'Learn from Basic to Advance '},
     { id: 1, Linkes:'https://www.freecodecamp.org/news/content/images/2022/05/PHP.jpg', Desc:'Learn from Basic to Advance '},
     { id: 1, Linkes:'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png', Desc:"'Learn from Basic to Advance ',"}, 
     { id: 1, Linkes:'https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg',Desc:'learn from basic to Advance '},
     { id: 1, Linkes:'https://www.fullstackpython.com/img/logos/django.png', Desc:'Learn from Basic to Advance '},
     { id: 1, Linkes:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png', Desc:'Learn from Basic to Advance '},
     { id: 1, Linkes:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', Desc:'Learn from Basic to Advance '},
     { id: 1, Linkes:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png', Desc:'Learn from Basic to Advance '},

   ]

  return (
    <>
       <div className='course-parent'>
         {Images.map((item,index)=>(
             <div className='course-image'>
             <img  src={item.Linkes}/>
              <div className='course-description'>
                <p> {item.Desc} </p>
                  <div className='btn button'>
                    <button>Learn About  </button>
                  </div>
              </div>
         </div>
 )         )}

         </div>               

 <Footer/>
    </>
  )
}

export default Course