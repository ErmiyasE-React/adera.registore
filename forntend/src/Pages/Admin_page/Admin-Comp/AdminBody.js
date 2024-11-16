import AdminTable from './AdminTable'

function AdminBody(){

    return(
  <div className="AdminBody" sx={{m:100}}>
      <p >&copy; This is the table palce</p>
      <div sx={{mY:100,mX:200}}>
        <AdminTable/>
      </div>
     
  </div>
    

    );

}
export default AdminBody