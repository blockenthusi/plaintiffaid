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
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setemail] = useState("");
  const [schedule, setSchedule] = useState("");
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
            <p className="text-base">Schedule Appointment</p>
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
            label="Client Name"
            className="clientInput"
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
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
            label="Date of Appointment "
            className="clientInput"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />
          <Input
            label="Time of Appointment"
            className="clientInput"
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          />

          <label
            style={{ fontSize: "15px", marginLeft: "1%" }}
            htmlFor="casedescription"
          >
            Schedule details
          </label>
          <textarea
            className="textAreaText"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            ref={fileInputRef}
            key={resetInput ? "reset" : "normal"}
          ></textarea>

          {loading ? (
            <HashLoader color="blue" size="16px" />
          ) : (
            <button className="clientBtn bg-blue-900 w-40 h-10 rounded text-white text-sm ">
              Schedule
            </button>
          )}
        </div>
      </Drawer>
    </>
  );
}
