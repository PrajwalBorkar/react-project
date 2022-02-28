
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();                              //To gets parameters from routes
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleback = (e) => {
    history.go(-1);
  }

  const handleDelete = (e) => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(()  =>{
        history.push('/'); 
    } )
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>  
          <button onClick={handleback} >Back To Home</button>
          <button onClick={handleDelete} >Delete</button>
        </article> 
      
      )}
     
    </div>
  );
}
 
export default BlogDetails;