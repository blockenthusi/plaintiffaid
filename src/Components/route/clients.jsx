import { useState } from "react";
import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import ClientTable from "../Tables/ClientTable";
import { Drawer } from "antd";
import Input from "../Input/Input";
import { MdOutlineClose } from "react-icons/md";

export default function Clients() {
  const [visible, setVisible] = useState(false);
  const [firstname, setFirstname] = useState("")
  const id = JSON.parse(localStorage.getItem("user")).UserID
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
          <Input label=" Firstname" className="clientInput" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
          <Input label=" Lastname" className="clientInput" />
          <Input label=" Email" className="clientInput" />
          <Input label=" Phonenumber" className="clientInput" />
          <Input label=" Gender" className="clientInput" />
          <Input label=" Address" className="clientInput" />
          <Input label=" Case Title" className="clientInput" />
          <Input label=" Case Description" className="clientInput" />
          {/* <textarea></textarea> */}
        </div>
      </Drawer>
    </>
  );
}
