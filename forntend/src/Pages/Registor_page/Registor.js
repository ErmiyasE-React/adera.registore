import Navbar from './Registor-comp/RegistorNav';
import { Outlet } from "react-router-dom";


function Registor(){
  
 
  return(
    <>
        <Navbar />
          <Outlet/>
       
        </>
  );

}
export default Registor