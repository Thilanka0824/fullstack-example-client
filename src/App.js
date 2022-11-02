import { useState, useEffect } from "react";
import "./App.css";

const urlEndpoint = "http://localhost:4000";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [id, setId] = useState("976604e5-b10f-47fb-9191-dcb23df24277");
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await fetch(`${urlEndpoint}/blogs/all`);
      const fetchedBlogs = await result.json();
      console.log("yo");
      console.log("fetchedBlogs", fetchedBlogs);
      setBlogs(fetchedBlogs.post);
    };
    fetchBlogs();
  }, []);

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
        <h1>{blog.title}</h1>
        <h3>{blog.author}</h3>
        <p>{blog.text}</p>

        {/* {blogs.map((blog, index)=>{
    return <div key={index}>
      <h1>{blog.title}</h1>
      <p>{blog.id}</p>
     
      
    </div>
  })} */}
        <label>Enter id number</label>
        <input
          type="text"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>

        <br />
        
        <select
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
      </header>
    </div>
  );
}

export default App;
