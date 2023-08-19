import React from 'react';
import './Css/Resources.css';
import Footer from '../Footer';
import Link from 'react-router-dom';
const Resources = () => {
  return (
 <div>
 <div className='bloging'>
   <div className='bloging-list'>
       <nav className='blogin-list-letf'>
         <ul className='ul-bloging'>
         <h2 className='Resources-left-header'>learning programming language </h2>
           <li> <a>Top ten programming languages </a> </li>
           <li> <a>What is blogin </a> </li>
           <li> <a>How to create a blog </a> </li>
           <li> <a>What is rest a pi  </a> </li>
           <li> <a>how to learn web devolpment  </a> </li>
         </ul>
       </nav>
         <div className='bloging-detail'>
           <div className='bloging-detail-right'>
          
             <h2>Top Ten Programming Language </h2>
              <hr/>
             <p>
             There are many programming languages in use today, and the popularity of a language can depend on the industry or context in which it is used. However, some languages are considered to be more popular or widely used than others. Here are the top 10 programming languages, according to the TIOBE index, which is a measure of the popularity of programming languages:

Python
Java
C
C++.blogin
JavaScript
C#
PHP
Go
R
Swift
It's worth noting that this list may change over time and may also vary depending on the source or methodology used to determine popularity.
             </p>
              <h2>What is Bloging </h2>
               <hr/>
               Blogging is the practice of regularly creating and publishing written content on the internet, usually in the form of a personal diary or journal. Blogs are typically maintained by an individual with regular entries of commentary, descriptions of events, or other material such as graphics or video.

Here are the steps to start a blog:
 <hr/>
  <p>
    Choose a blogging platform: There are many different blogging platforms to choose from, such as WordPress, Blogger, Squarespace, and Wix, among others. Each platform has its own set of features and capabilities, so it's important to research and compare them to find the one that best suits your needs.

Select a domain name: The domain name is the web address for your blog, such as "www.example.com." When you choose a hosting provider, you might get the domain name for free, but sometimes you will need to purchase it separately.

Set up hosting: Most blogging platforms will require you to set up hosting for your blog. Hosting is essentially a way for your blog to be accessible to people on the internet. Some platforms, such as WordPress, provide hosting as part of their service.

Design and customize your blog: After you've set up hosting, you can start to customize the design and layout of your blog, choosing a template or theme, and adjusting the colors, fonts, and other settings to create a unique look and feel.

Create content: Once your blog is set up, you can start creating and publishing content. This can include text, images, videos, and other media. The key to blogging is to consistently creating new and interesting content that will keep your readers coming back.

Promote your blog: You can share your blog on your social media accounts, submit it to search engines, or participate in online communities related to the topic of your blog. This can help to drive traffic to your blog and build an audience.

Blogging can be a fun and rewarding hobby or even a career, but it takes time and effort to build an audience and establish a blog. It's important to be consistent and be patient, and eventually you'll see your efforts pay off.
     
  </p>
     <h2>how to start webdevolpment </h2>
          <p>
            Web development is the process of building and maintaining websites. It encompasses a wide range of tasks and technologies, including the development of the front-end (the part of a website that users interact with) and the back-end (the part of a website that handles the behind-the-scenes functionality).

There are many different ways to get started with web development, depending on your background and interests. Here are a few options:

Learn HTML, CSS, and JavaScript: These are the three fundamental technologies that are used to build the front-end of websites. You can learn these technologies through online tutorials and courses, and by experimenting with them on your own.

Learn a web development framework: Frameworks like React, Angular, and Vue.js provide pre-built structures for building web apps and can help you speed up your development process.

Learn a back-end programming language: If you're interested in building the back-end of websites, you'll need to learn a back-end programming language like Python, Ruby, or Java. You'll also need to learn how to use a web framework like Express (for Node.js) or Ruby on Rails.

Learn a full-stack development: Full-stack developers can build both the front-end and back-end of a website. This can be a more challenging path, but it allows you to work on both ends of the web development process.

Joining the online communities or forums : Connecting with the developer communities in social media or forums help you to stay updated with the latest technologies. Also its a good place to ask your questions and learn from the people who are working on the same technologies


          </p>
           <h2>What is Rest api </h2>
             <p>
REST (Representational State Transfer) is a software architectural style that defines a set of constraints to be used when creating web services. A RESTful API (Application Programming Interface) is an API that follows the REST architectural style and constraints.

RESTful APIs use HTTP requests to POST (create), PUT (update), GET (read), and DELETE (delete) data. The use of HTTP requests to GET, PUT, POST and DELETE data, rather than the use of a custom protocol, makes RESTful APIs less complex and easier to use.

A RESTful API is made up of a set of endpoints, each of which corresponds to a specific resource. For example, an API for a library's catalog of books might have endpoints for books, authors, and publishers. Each endpoint would allow the client to perform different operations on the corresponding resource.

An example of a RESTful API request is a GET request to retrieve a resource, like retrieving all the books in a library's catalog, which would be represented by the endpoint: /books.

RESTful API is widely used in web applications, mobile apps, and other systems that need to communicate over HTTP protocol. Many popular web services and APIs, such as Twitter, Facebook, and Google, provide RESTful interfaces for interacting with their platforms. The popularity of RESTful API is partly due to the simplicity and flexibility it offers. With the use of simple HTTP requests, developers can easily interact with the service and access its functionality.

A RESTful API is also stateless, meaning that the server doesn't keep track of the client's state. Instead, all the information necessary to understand and process the request must be included in the request itself. This allows the API to be highly scalable and easy to cache, as the server doesn't need to maintain any state information.

It's important to note that not all APIs are RESTful and not all RESTful APIs are good, adhering to REST principles, but this is the most widely used term and a widely adopted architectural pattern.

             </p>
           </div>
         </div>
   </div>
 </div>
  <Footer/>
 </div>
  )
}

export default Resources