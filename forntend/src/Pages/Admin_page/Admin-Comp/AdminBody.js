import AdminTable from './AdminTable'

function AdminBody(){

    return(
  <div className="AdminBody" sx={{m:110}}>
      <p >&copy; This is the table palce</p>
      <div sx={{marginTop:"150px"}}>
        <AdminTable/>
      </div>
     
  </div>
    

    );

}
export default AdminBody