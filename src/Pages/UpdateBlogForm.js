import { useEffect, useState } from "react";

const UpdateBlogForm = (props) => {
  const { urlEndpoint, blogs, setShouldRefetch } = props;
  const [id, setId] = useState("");
  //const [blogToUpdate, setBlogToUpdate] = useState({});
  const [title, setTitle] = useState("");
  const [text, setText] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    const fetchBlogToUpdate = async () => {
      const result = await fetch(`${urlEndpoint}/blogs/get-one/${id}`);
      const fetchedBlogToUpdate = await result.json();
      // setBlogToUpdate(fetchBlogToUpdate.post);
      setTitle(fetchBlogToUpdate.post.title)
      setText(fetchBlogToUpdate.post.title)
      setAuthor(fetchBlogToUpdate.post.title)
    };
  }, [id]);

  const handleUpdateBlog = async () => {
    setShouldRefetch(true)
    const response = await fetch(`${urlEndpoint}/blogs/update-one/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ ...blogToUpdate }),
      body: JSON.stringify({
        title,
        author,
        text,
      }),
    });
    const updatePayload = await response.json()
    setShouldRefetch(false)
  };

  return (
    <div className="update">
      <h1>Update Blog Form</h1>
      <br />
      <label>Title: </label>
      <input
        // value={blogToUpdate.title} 
        value={title}
        type="text"
        onChange={(e) => {
            setTitle(e.target.value);
          // const blogToUpdateCopy = {
          //   ...blogToUpdate,
          //   title: e.target.value,
          // };
          // setBlogToUpdate(blogToUpdateCopy);

        }}
      ></input>
      <br />
      <br />
      <label>Author: </label>
      <input
        // value={blogToUpdate.author}
        value={author}
        type="text"
        onChange={(e) => {
            setAuthor(e.target.value);
          // const blogToUpdateCopy = {
          //   ...blogToUpdate,
          //   author: e.target.value,
          // };
          // setBlogToUpdate(blogToUpdateCopy);
        }}
      />
      <br />
      <br />
      <label>Text: </label>
      <textarea
        // value={blogToUpdate.text}
        value={text}
        onChange={(e) => {
             setText(e.target.value);
          // const blogToUpdateCopy = {
          //   ...blogToUpdate,
          //   text: e.target.value,
          // };
          // setBlogToUpdate(blogToUpdateCopy)
        }}
      ></textarea>
      <br />

      <button
        onClick={() => {
          handleUpdateBlog();
        }}
      >
        Update Blog
      </button>

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
    </div>
  );
};

export default UpdateBlogForm;
