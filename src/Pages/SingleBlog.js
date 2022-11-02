import React from "react";

const SingleBlog = ({id, setId, blogs, blog}) => {
   //const {id, setId, blogs, blog} = props
  return (
    <div>
      <label>Enter id number</label>
      <input
        value={id}
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <br />
      <button>Get</button>

      <br />
      <select
        value={id}
        onChange={(e) => {
          // onChange handler will set the id variable using setID
          setId(e.target.value);
        }}>
        <option>Please choose an id number</option>
        {blogs.map((blog, index) => {
          // mapping to each blog from blogs array
          return <option key={index}>{blog.id}</option>;
        })}
      </select>
    </div>
  );
};

export default SingleBlog;
