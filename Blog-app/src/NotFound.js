import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>This is page unavailable</h2>
            <Link to='/'>Back to Home</Link>
        </div>
     );
}
 
export default NotFound;