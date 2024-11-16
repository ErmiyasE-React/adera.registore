import Navbar from '../Comop/Navbar';
import { Outlet } from "react-router-dom";


function Home(){
  
 
  return(
    <>
        <Navbar />
          <Outlet/>
       
        </>
  );

}
export default Home