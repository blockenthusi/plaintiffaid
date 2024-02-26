import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Messages from "../../assets/Messages.png";
import logo2 from "../../assets/logo2.png";
import image from "../../assets/image.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import 'animate.css';




const Signup = () => {
  const [pop, setPop] = useState(false);
  const [loading, setLoading] = useState(false);

  const schema = yup
    .object({
      firmname: yup.string().required("Input your firm's name"),
      email: yup.string().required("input an email"),
      phonenumber: yup.string().min(11).max(14).required("input your phone number"),
      password: yup.string().required("Input password"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("password is required"),
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
    toast.success("login successful");
    setLoading(false);
    setInterval(() => {
      setPop(true)
    }, 2000);
  };

  return (
    <main>
      <header>
        <div className="logoDiv">
          <Link className="link" to="/">
            <img src={logo2} className="logo" />
          </Link>
        </div>
      </header>
      <div className="signupWrapper">
        <div className="left">
          <p>
            Better way to organize your client <br /> data
          </p>
          <div className="imageDiv">
            <img src={image} className="image" />
          </div>
        </div>
        <div className="right">
          <p>Sign up !</p>

          <form  method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputDiv">
              <input
                placeholder="Firm Name"
                type="text"
                {...register("firmname")}
              />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.firmname?.message}
              </p>
            </div>

            <div className="inputDiv">
              <input placeholder="Email" type="text" {...register("email")} />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.email?.message}
              </p>
            </div>

            <div className="inputDiv">
              <input
                placeholder="Phone Number"
                type="text"
                {...register("phonenumber")}
              />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.phonenumber?.message}
              </p>
            </div>
            <div className="inputDiv">
              <input
                placeholder="Password"
                type="text"
                {...register("password")}
              />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.password?.message}
              </p>

              {/* <p className="ptag">{errors?.email?.message}</p> */}
            </div>
            <div className="inputDiv">
              <input
                placeholder="Confirm Password"
                type="text"
                {...register("confirmPassword")}
              />
              <p style={{ fontSize: "12px", color: "red" }}>
                {errors?.confirmPassword?.message}
              </p>
            </div>
            {loading ? (
                    <ClipLoader color="yellow" size="20px" />
                  ) : (
                    <button>Submit</button>
                  )}

          </form>

          <h3 className="loginAccounts">
            Already have an account?
            <Link className="link" style={{ color: "#003482ff" }} to="/login">
              Login
            </Link>
          </h3>
        </div>
      </div>

      {pop ? (
        <div className="confirmHold">
          <div className="box">
            <div className="messageImageDiv">
              <img src={Messages} />
            </div>
            <h2>Verify your email</h2>
            <p>
              Almost there ! We’ve sent a verification email to
              ..........@gmail.com
              <br />
              You need to verify your email address to login into PlattiffAid.
            </p>
            <button>Resend Email</button>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default Signup;
