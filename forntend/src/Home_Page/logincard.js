import loginimag from '../asset/bg-01.jpg'
import "./logincard.css"
import {Link} from 'react-router-dom'

function logincard() {

    return (
        <>
            <div className="login-card">
                <div>
                    <img className='card-image' src={loginimag} alt="Login card " />
                </div>
                <h2 className='card-title'>LOGIN PAGE</h2>
                <div className="login-input">
                    <label htmlFor="">User Name :
                        <input  placeholder='Enter Your Name'

                        />
                    </label>
                    <br />
                    <label htmlFor="">Password :
                        <input type='password' placeholder='Enter Your Password'

                        />
                    </label>
                    <br />

                    <Link to="/Registor"><button value={loginimag} >Login Registor</button></Link>
                    <Link to="/Admin"><button  >Login Admin</button></Link>
                    <Link to="/staff"><button  >Login staff</button></Link>
                    <button type="reset">RESET</button>
                    <br />
                    <br />
                    <p className='card-text'>Thank you for working with us</p>
                </div>
            </div>
        </>


    );

}
export default logincard