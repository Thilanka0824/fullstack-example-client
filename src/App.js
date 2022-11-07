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
  const [id, setId] = useState("976604e5-b10f-47fb-9191-dcb23df24277");
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
        <h1>{blog.title}</h1>
        <h3>{blog.author}</h3>
        <p>{blog.text}</p>

        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
