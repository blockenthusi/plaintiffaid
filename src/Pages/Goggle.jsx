import { signInWithGoggle } from "../Firebase";

export default function Goggle() {
  return (
    <>
      <button onClick={signInWithGoggle}> Sign in with Goggle</button>
      <h1> {localStorage.getItem("name")}</h1> 
      <h1> {localStorage.getItem("email")}</h1> 
      <img src={localStorage.getItem("profilePic")} alt="" /> 
    </>
  );
}
