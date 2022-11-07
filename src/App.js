import { useState, useEffect } from "react";
import "./App.css";
import CreateBlogForm from "./Pages/CreateBlogForm";
import DeleteBlogPage from "./Pages/DeleteBlogPage";
import SingleBlog from "./Pages/SingleBlog";
import UpdateBlogForm from "./Pages/UpdateBlogForm";
import Scratch from "./Scratch";

const urlEndpoint = "http://localhost:4000"

function App() {
  const [blogs, setBlogs] = useState([]);
  const [id, setId] = useState("d43b7be3-6c8d-48c9-a596-6aa07572669e");
  const [blog, setBlog] = useState({});
  const [shouldRefetch, setShouldRefetch] = useState(false)

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await fetch(`${urlEndpoint}/blogs/all`);
      const fetchedBlogs = await result.json();
      console.log("yo");
      console.log("fetchedBlogs", fetchedBlogs);
      setBlogs(fetchedBlogs.post);
    };
    fetchBlogs();
  }, [shouldRefetch]);

  useEffect(() => {
    const findBlog = async () => {
      const result = await fetch(`${urlEndpoint}/blogs/get-one/${id}`);
      const foundBlog = await result.json();
      console.log(foundBlog);
      setBlog(foundBlog.post);
    };
    findBlog();
  }, [id]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Scratch/> */}
        <h2>{shouldRefetch && "Please wait, we are refetching the data"}</h2>


        <CreateBlogForm urlEndpoint={urlEndpoint} setShouldRefetch={setShouldRefetch} />
        <UpdateBlogForm urlEndpoint={urlEndpoint} blogs={blogs} setShouldRefetch={setShouldRefetch} />

        <SingleBlog id={id} setId={setId} blogs={blogs} blog={blog} />
        <DeleteBlogPage urlEndpoint={urlEndpoint} id={id} setId={setId} blogs={blogs} />

        {blog !== null && 
        <div>
          <h1>{blog.title}</h1>
          <h3>{blog.author}</h3>
          <p>{blog.text}</p>
        </div>}


        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
