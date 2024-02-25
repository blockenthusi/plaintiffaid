import React, { useState } from "react";
import "./Login.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Image from "../../../assets/Image.jpg";
import { ClipLoader } from "react-spinners";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup
    .object({
      email: yup.string().required("Type email"),
      password: yup.string().required("Input password"),
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
    toast.success("login successfull");
    setLoading(false);
  };

  return (
    <div className="loginHolder">
      <div className="loginHolderWrap">
        <div className="toplogo">
          <img src="logo.png" alt="" />
          <Link className="link" to="/">
            <FaArrowLeftLong style={{ color: "#003482ff" }} />
          </Link>
        </div>
        <div className="lowerHold">
          <div className="loginLeftz">
            <img src={Image} alt="" />
          </div>
          <div className="loginRightz">
            <div className="welcome">
              <p>Welcome back</p>
            </div>
            <div className="bigText">
              <p>Login to your account</p>
            </div>

            <form
              className="form"
              method="post"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="formWrap">
                <div className="takes">
                  <div className="inf">
                    <p
                      style={{
                        color: "red",
                        fontSize: "13px",
                        paddingLeft: "35px",
                      }}
                    >
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="topa">
                    <MdOutlineMarkEmailRead
                      style={{ color: "#003482ff", fontSize: "14px" }}
                    />
                    <input
                      type="email"
                      placeholder="email"
                      className="fills"
                      {...register("email")}
                    />
                  </div>
                </div>

                <div className="takes">
                  <div className="inf">
                    <p
                      style={{
                        color: "red",
                        fontSize: "13px",
                        paddingLeft: "35px",
                      }}
                    >
                      {errors.password?.message}
                    </p>
                  </div>
                  <div className="topTakes">
                    <RiLockPasswordFill
                      style={{ color: "#003482ff", fontSize: "14px" }}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="password"
                      className="fills"
                      {...register("password")}
                    />

                    {showPassword ? (
                      <FaRegEye
                        onClick={handleShowpassword}
                        style={{ color: "#003482ff", fontSize: "12px" }}
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={handleShowpassword}
                        style={{ color: "#003482ff", fontSize: "12px" }}
                      />
                    )}
                  </div>

                  <div className="forgotPassword">
                    <Link className="link" to="/forgotpassword">
                      <p>Forgot password?</p>
                    </Link>
                  </div>
                </div>

                <div className="loginButton">
                  {loading ? (
                    <ClipLoader color="yellow" size="20px" />
                  ) : (
                    <button>Login</button>
                  )}
                </div>

                <div className="signup">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      className="link"
                      style={{ color: "#003482ff" }}
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
