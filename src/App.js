import {useState, useEffect} from "react"
import './App.css';

const urlEndpoint = "http://localhost:4000"
function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(()=>{
    const fetchBlogs = async () =>{
      const result = await fetch(`${urlEndpoint}/blogs/all`)
      const fetchedBlogs = await result.json()
      console.log("yo")
      console.log("fetchedBlogs", fetchedBlogs)
      setBlogs(fetchedBlogs.post)
      
    }
    fetchBlogs()
   
  }, [urlEndpoint])
  
  return (
    <div className="App">
      <header className="App-header">
  
    {/* <h1>hi</h1> */}
    <h1>{blogs.title}</h1>
    <h3>{blogs.author}</h3>
    <p>{blogs.text}</p>
  {/* {blogs.map((blog, index)=>{
    return <div key={index}>
      <h1>{blog.title}</h1>
      
    </div>
  })} */}
      </header>
    </div>
  );
}

export default App;
