import Navbar from './Admin-Comp/AdminNav';
import { Outlet } from "react-router-dom";


function Admin(){
  
 
  return(
    <>
        <Navbar />
          <Outlet/>
       
        </>
  );

}
export default Admin