import React from "react";
// import { useState, useEffect } from "react";

const DeleteBlogPage = (props) => {
  // const [id, setId] = useState("")
  const { id, setId, blogs, urlEndpoint } = props;

  const handleDeleteBlog = async () => {
    const response = await fetch(`${urlEndpoint}/blogs/delete-one/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ ...blogToUpdate }),
    });
  };

  return (
    <div>
      <h1>Delete a Blog</h1>
      <select
        value={id}
        onChange={(e) => {
          // onChange handler will set the id variable using setID
          setId(e.target.value);
        }}
      >
        <option>Please choose an id number</option>
        {blogs.map((blog, index) => {
          // mapping to each blog from blogs array
          return <option key={index}>{blog.id}</option>;
        })}
      </select>
      <button
        onClick={() => {
          handleDeleteBlog();
        }}
      >
        Delete Blog
      </button>
    </div>
  );
};

export default DeleteBlogPage;

/*

{
"_id": "636932ec07bf842a9d8bc668",
"title": "Street Kings",
"text": "An undercover cop, disillusioned by the death of his wife, is implicated in the murder of an officer and must struggle to clear himself.",
"author": "Keanu Reeves",
"categories": [
"movies"
],
"createdAt": "2022-11-07T16:31:40.067Z",
"lastModified": "2022-11-07T16:31:40.067Z",
"id": "6dee4795-eb4e-4641-9ae0-fd7f47081891"
}

*/
