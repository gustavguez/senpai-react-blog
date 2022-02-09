import { BlogCard } from "../common/BlogCard";
import axios from "axios";
import { useEffect, useState } from "react";

export function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  //Efecto secundario
  useEffect(() => {
    axios.get("http://localhost:4000/blogs").then((response) => {
      setBlogs(response.data);
    });
  }, []);

  const blogsList = blogs.map(function (blog) {
    return (
      <div className="col-4 mt-2" key={blog.id}>
        <BlogCard title={blog.title} />
      </div>
    );
  });

  return (
    <>
      <div className="container mt-4">
        <div className="row">{blogsList}</div>
      </div>
    </>
  );
}
