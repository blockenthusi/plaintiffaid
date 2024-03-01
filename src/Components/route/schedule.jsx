import { Drawer } from "antd";
import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import Input from "../Input/Input";
import ScheduleTable from "../Tables/ScheduleTable";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { HashLoader } from "react-spinners";

export default function Schedule() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [email, setemail] = useState("");
  const [CaseDescription, setCaseDescription] = useState("");
  const [resetInput, setResetInput] = useState(false);
  const fileInputRef = useRef(null);

  return (
    <>
      <DashboardLayout>
        <PageHeader title="Schedule" />
        <div className="w-full h-16 flex">
          <div className="h-full w-[95%] flex justify-end items-center space-x-4 ">
            <button
              className="bg-blue-900  w-44 h-8 rounded text-white text-sm "
              onClick={() => setVisible(true)}
            >
              Add New Schedule
            </button>
          </div>
        </div>
        <ScheduleTable />
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
            label=" Email"
            className="clientInput"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
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
            <button className="client_btn bg-blue-900 w-40 h-10 rounded text-white text-sm ">
              Batch Upload
            </button>
          )}
        </div>
      </Drawer>
    </>
  );
}
