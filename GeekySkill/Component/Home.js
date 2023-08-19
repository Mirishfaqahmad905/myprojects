import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./Css/Home-scrolling.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://media.istockphoto.com/id/1197071023/photo/portrait-of-software-developer-hacker-gamer-wearing-glasses-and-headset-sitting-at-his-desk.jpg?s=1024x1024&w=is&k=20&c=Vn6mZxKAeLiqMUWWvjJu81-_1Udhs5lEBjSzUQFCZxM=",
    "https://media.istockphoto.com/id/621371400/photo/the-more-you-know-the-more-you-can-do.jpg?s=1024x1024&w=is&k=20&c=LEXUgxpsfNjgZB2DcGZk71Wwb37asWVfyS26IN39tVw=",

];

//  useEffect(()=>{
//    setTimeout(() => {
//      window.alert('To Geeky Skill');
//    }, 100);
//  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

 
    const Subject = [
      { id: 1, name: 'A', images: 'https://imageio.forbes.com/specials-images/dam/imageserve/1039492660/960x0.jpg?height=470&width=711&fit=bounds' },
      { id: 2, name: 'DSA', images: 'https://static.javatpoint.com/ds/images/ds-tutorial.png' },
      { id: 3, name: 'C++', images: 'https://www.javatpoint.com/corebasic/images/cpp-training.png' },
      { id: 4, name: 'HTML', images: 'https://static.javatpoint.com/htmlpages/images/html-tutorial.png' },
      { id: 5, name: 'CSS', images: 'https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg.webp' },
      { id: 6, name: 'React', images: 'https://static.javatpoint.com/tutorial/reactjs/images/reactjs-tutorial.png' },
      { id: 7, name: 'Nodejs', images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' },
      { id: 9, name: 'Mysql', images: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/difference_between_sql_and_mysql.jpg' },
      { id: 9, name: 'Networking', images: 'https://static.javatpoint.com/tutorial/computer-network/images/computer-network-tutorial.png' }
    ];  

  return (
    <>
 <div className="home-scrolling">
      <div className="scroll-image">
        <div className="scroll-main-image">
          <div style={{textAlign:'center'}} className="main-img">
            <img src={images[currentIndex]}   style={{textAlign:'center'}} />
          </div>

        </div>
      </div>
  <div>

  </div>
    </div>
  <div style={{textAlign:"center",background:"#222",color:'white'}} className="tutorial-title">
      <h2>Geeky Skill </h2>
       < hr/>
  </div>
    
  <div className="tutorial-list">
   <div className="home-card">
    {Subject.map((item)=>(
       <div className="home-img-one">
          <img src={item.images}/>
           <div className="home-desc">
            <p>hello this is </p>
            </div>
             <button className="home-btn">{item.name}</button>
         </div>
    ))}
   </div>
</div>
 <Footer/>
    </>
  );




}

export default Home;
