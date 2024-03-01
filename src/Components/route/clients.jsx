import { useRef, useState } from "react";
import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import ClientTable from "../Tables/ClientTable";
import { Drawer } from "antd";
import Input from "../Input/Input";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

export default function Clients() {
  const [visible, setVisible] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [Gender, setGender] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setAddress] = useState("");
  const [lastname, setLastname] = useState("");
  const [caseName, setcaseName] = useState("");
  const [CaseDescription, setCaseDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetInput, setResetInput] = useState(false);
  const fileInputRef = useRef(null);
  console.log(
    firstname,
    Gender,
    contactNumber,
    email,
    address,
    lastname,
    caseName,
    CaseDescription
  );
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `https://plaintiff-backend.onrender.com/api_v1/save_client/${id}`,
        {
          firstname,
          Gender,
          contactNumber,
          email,
          address,
          lastname,
          caseName,
          CaseDescription,
        }
      );
      console.log(res);
      toast.success("Client added Successfully");
      setLoading(false);
      setResetInput(true)
    } catch (err) {
      if (err.response.data.message) {
        toast.error(err.response.data.message);
        setLoading(false);
      }
      setLoading(false);
    }
  };
  return (
    <>
      <DashboardLayout>
        <PageHeader title="Client Data" />
        <div className="w-full h-16 flex">
          <div className="h-full w-[95%] flex justify-end items-center space-x-4 ">
            <button className="client_btn bg-blue-900  w-40 h-8 rounded text-white text-sm ">
              Batch Upload
            </button>
            <button
              className="bg-blue-900  w-44 h-8 rounded text-white text-sm "
              onClick={() => setVisible(true)}
            >
              Add New Client
            </button>
          </div>
        </div>
        <ClientTable />
      </DashboardLayout>
      <Drawer
        open={visible}
        title={
          <div className="flex  justify-between items-center ">
            <p className="text-base">Client Information</p>
            <p onClick={() => setVisible(false)}>
              <MdOutlineClose className="text-lg cursor-pointer" />
            </p>
          </div>
        }
        maskClosable={false}
        closable={false}
      >
        <div className="space-y-2">
          <Input
            label=" Firstname"
            className="clientInput"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Lastname"
            className="clientInput"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Email"
            className="clientInput"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Phonenumber"
            className="clientInput"
            value={contactNumber}
            onChange={(e) => setcontactNumber(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Gender"
            className="clientInput"
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Address"
            className="clientInput"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label=" Case Name"
            className="clientInput"
            value={caseName}
            onChange={(e) => setcaseName(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />

          <textarea
            className="clientInput"
            value={CaseDescription}
            onChange={(e) => setCaseDescription(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          ></textarea>

          {loading ? (
            <HashLoader color="blue" size="16px" />
          ) : (
            <button
              className="client_btn bg-blue-900 w-40 h-10 rounded text-white text-sm "
              onClick={() => handleSubmit()}
            >
              Batch Upload
            </button>
          )}
        </div>
      </Drawer>
    </>
  );
}
