import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Messages from "../../assets/Messages.png"

const Signup = () => {
  const [pop, setPop] = useState(false);




 
  return (
    <main>
      <header>
        <div className="logoDiv">
          <Link className="link" to="/">
            <img src="src/assets/logo2.png" className="logo" />
          </Link>
        </div>
      </header>
      <div className="signupWrapper">
        <div className="left">
          <p>
            Better way to organize your client <br /> data
          </p>
          <div className="imageDiv">
            <img src="src/assets/image.png" className="image" />
          </div>
        </div>
        <div className="right">
          <p>Sign up !</p>
          <div className="inputDiv">
            <input placeholder="Firm Name" type="text" />
          </div>
          <div className="inputDiv">
            <input placeholder="Email" type="text" />
          </div>
          <div className="inputDiv">
            <input placeholder="Phone Number" type="text" />
          </div>
          <div className="inputDiv">
            <input placeholder="Password" type="text" />
          </div>
          <div className="inputDiv">
            <input placeholder="Confirm Password" type="text" />
          </div>
          <button onClick={()=>setPop(true)}>Submit</button>

          <h3 className="loginAccounts">Already have an account?<Link className="link" style={{color: "#003482ff"}} to="/login">Login</Link></h3>
        </div>
      </div>
      

   
    {
      pop?
      <div className="confirmHold">
         <div className='box'>
        <div className="messageImageDiv">
            <img src='src/assets/Messages.png'/>
        </div>
        <h2>Verify your email</h2>
        <p>Almost there ! We’ve sent a verification email to ..........@gmail.com<br/>You need to verify your email address to login into PlattiffAid.</p>
        <button>Resend Email</button>
        </div>
    </div>:null
      
    }
  

    </main>
  );
};

export default Signup;
