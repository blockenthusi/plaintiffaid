import './Signup.css'




const Signup = () => {
  return (
   <main>
     <header>
        <div className="logoDiv">
            <img src='src/assets/logo2.png' className='logo'/>
        </div>
        </header>
       <div className='signupWrapper'>
       <div className="left">
        <p>Better way to organize your client <br/> data</p>
        <div className="imageDiv">
            <img src='src/assets/image.png' className='image'/>
        </div>
       </div>
        <div className="right">
            <p>Sign up !</p>
            <div className="inputDiv">
                <input placeholder='Firm Name' type='text'/>
            </div>
            <div className="inputDiv">
                <input placeholder='Email' type='text'/>
            </div>
            <div className="inputDiv">
                <input placeholder='Phone Number' type='text'/>
            </div>
            <div className="inputDiv">
                <input placeholder='Password' type='text'/>
            </div>
            <div className="inputDiv">
                <input placeholder='Confirm Password' type='text'/>
            </div>
       <button>Submit</button>
        </div>
       </div>
       <p className='login'>Already have an account? Login</p>

   </main>
  )
}

export default Signup