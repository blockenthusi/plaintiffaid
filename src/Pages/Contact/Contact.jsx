import React,{useState} from "react";
import "./Contact.css";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../../Components/Header/Header"




export default function contact() {

    const data = [
        {
          label: "Name",
        },
        { label: "Email" },
        { label: "Company" },
      ];

    //   const [show, setShow] = useState(false)
    
    return(
        <div className="contactHolder">
      <div className="contactWrapper">
        <Header show={show} setShow={setShow}/>
      {
      show === true?<Dropdown/>: null
     }

        <div className="intro">
          <div className="introWrapper">
            <h1>Get in touch with me</h1>
            <p>
              We’re here to help you out if you’re experiencing any issues or if
              you’re just curious about things.
            </p>
          </div>
        </div>

        <div className="data">
          <div className="dataFrame">
            <div className="hee">
              {data.map((e) => (
                <Input className="boi" label={e.label} />
              ))}
              <div className="div">
              <label htmlFor="message"> Message</label>
              <textarea className="textarea"></textarea>

              </div>
              
              <div className="send">
            <button>Send</button>
        </div> 
            </div>
            

            
          </div>
        </div>

      </div>
    </div>
    );
}





