import React from 'react'
import { useState, useEffect } from 'react'

const DeleteBlogPage = (props) => {
    // const [id, setId] = useState("")
    const {id, setId, blogs, urlEndpoint} = props

    const handleDeleteBlog = async ()=>{
        const response = await fetch(`${urlEndpoint}/blogs/delete-one/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({ ...blogToUpdate }),
           
        });
    }

  return (
    <div>
          <h1>Delete a Blog</h1>
          <select
              value={id}
              onChange={(e) => {
                  // onChange handler will set the id variable using setID
                  setId(e.target.value);
                  handleDeleteBlog()
              }}
          >
              <option>Please choose an id number</option>
              {blogs.map((blog, index) => {
                  // mapping to each blog from blogs array
                  return <option key={index}>{blog.id}</option>;
              })}
          </select>
    
    </div>
  )
}

export default DeleteBlogPage