import React, {useState} from "react";
import "./ForgotPassword.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const ForgotPassword = () => {

    const [loading, setLoading] = useState(false);
    
  const schema = yup
    .object({
      email: yup.string().required("Input email"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    toast.success("Hi, check your email");
    setLoading(false);
  };

  return (
    <div className="forgotPasswordHolder">
      <div className="forgotPasswordWrapper">
        <div className="forgotPasswordHead">
          <div className="forgotPasswordHeadLeft">
            <img src={logo} />
          </div>
          <div className="forgotPasswordHeadRight">
            <Link className="link" to="/">
              <FaArrowLeftLong style={{ color: "#003482ff" }} />
            </Link>
          </div>
        </div>

        <div className="forgotPasswordBody">
          <div className="bodyContainer">
            <form
              method="post"
              className="enteryInput"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="upperText">
                <p>Email address</p>
              </div>

              <input type="email" {...register("email")} />

              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.email?.message}
              </p>

              <div className="resetBtn">
                
              {loading ? (
                    <ClipLoader color="yellow" size="20px" />
                  ) : (
                    <button>Reset</button>
                  )}
                
              </div>
            </form>
          </div>
        </div>

        <div className="questions">
          <p className="visits">Have questions or need help?</p>
          <p className="visit">
            Visit the PlaintiffAid center or give us a call at +2347025254512
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
