import './VerifyEmail.css'

const VerifyEmail = () => {
  return (
    <div className='box'>
        <div className="messageImageDiv">
            <img src='src/assets/Messages.png'/>
        </div>
        <h2>Verify your email</h2>
        <p>Almost there ! We’ve sent a verification email to ..........@gmail.com<br/>You need to verify your email address to login into PlattiffAid.</p>
        <button>Resend Email</button>
    </div>
  )
}

export default VerifyEmail