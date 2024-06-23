import { useState } from "react";
import BlogList from './BlogList';

const  Home= () => {
    const [blogs , setBlogs]=useState ([
        {title: 'english',body:'merav vaanunu',lecturer: 'merav',id:111},
        {title: 'מחשבים',body:'merav vaanunu',lecturer: 'chavi',id:222},
        {title: ' חשבון',body:'merav vaanunu',lecturer: 'avital',id:333}    ]);
  
         const  handledelete = (id) => {
         const newBlogs=blogs.filter(blog =>blog.id!==id );
         setBlogs(newBlogs);
         }
        return ( 
        <div className="Home"> 
        <BlogList  blogs={blogs} title="all blogs!" handledelete={handledelete}/>
        <BlogList  blogs={blogs.filter((blog)=>blog.lecturer==='merav')} title="my blogs"/>
        </div>
     );
}

export default Home;