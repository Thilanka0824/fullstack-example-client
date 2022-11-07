import { useState } from "react";
const CreateBlogForm = (props) => {
  const { urlEndpoint, setShouldRefetch } = props;

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePostBlog = async () => {
    setShouldRefetch(true);
    const response = await fetch(`${urlEndpoint}/blogs/create-one`, {
      method: "POST", //defines the type of request
      body: JSON.stringify({
        title,
        text,
        author,
        categories,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    setShouldRefetch(false);
    if (!response.ok) {
      setSuccessMessage("There was a problem creating the blog");
      return;
    }
    const payload = await response.json();
    if (!payload.success) {
      setSuccessMessage("There was a server problem creating the blog");
      return;
    }
    setSuccessMessage("Successfully created the blog");
    console.log(response);
  };

  return (
    <div>
      <br />
      <h1>Create a blog</h1>
      {successMessage}
      <label>Title: </label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <label>Author: </label>
      <input
        type="text"
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <br />
      <br />
      <label>Text: </label>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <br />
      <br />
      <label>Category: </label>
      <input
        type="text"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCategories([...categories, category]);
        }}
      >
        Add Category
      </button>
      <br />
      <button
        onClick={() => {
          handlePostBlog();
        }}
      >
        Create Blog
      </button>
      <hr />
    </div>
  );
};
export default CreateBlogForm;
