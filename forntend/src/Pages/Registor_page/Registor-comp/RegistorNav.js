import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
   return (
       <>
       <div className="nav">
               <div className="nav-title">
                   <h1>Adera Foundation's Family</h1>
                   <h3>Registion Page</h3>
               </div> 
               <div className="nav-main"></div>
               <div className="nav-menu">

                   <ul>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/contact">Donite</Link></li>
                       <li><Link to="/login">Login</Link></li>
                   </ul>
               </div>    
             
       </div>
   
       </>
    
   );
}
export default Navbar