// import Logo from "../../Components/Logo";

import MainArea from "../../Components/MainArea/MainArea";

import Sidebar from "../../Components/sidebar/Sidebar";


export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MainArea>{children}</MainArea>
      </div>
    </>
  );
}
