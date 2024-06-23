import { useState } from "react";

const BlogList = ({blogs, title,handledelete}) => {
 const [renderedTitle,setRenderedTitle]=useState(title);
 const [clicked,setClicked]=useState(true);
    // const blogs=props.blogs;
    // const title=props.title;
    // console.log(props,blogs);
    const handleClick=()=>{if(clicked){setRenderedTitle('changed!');setClicked(false); } else{setRenderedTitle('changed 2');setClicked(true);}}
    return ( 
        <div className="blog-list">
         <h2>{renderedTitle}</h2>
         <h2>{title}</h2>
         <button onClick={handleClick}>change title</button>
         
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>The name of the lecturer: {blog.lecturer}</p>
                    {<button onClick={() => handledelete(blog.id)}>delete blog</button>      }      
                     

            </div>
            ))}
        </div>
     );
}   
 
export default BlogList;