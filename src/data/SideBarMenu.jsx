import { FaHome } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { TbCloudDataConnection } from "react-icons/tb";


const SidebarMenuData = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboards",
    icon: <FaHome style={{ fontSize: "19px" }} />,
  },
  {
    id: 2,
    label: "Clients data",
    path: "/clients",
    icon: <TbCloudDataConnection  style={{ fontSize: "19px" }} />,
    children: [
      { id: 2.1, label: "My Wallets", path: "/wallets" },
      { id: 2.2, label: "Fund Wallets", path: "/wallets/deposit" },
      { id: 2.3, label: "Funding History", path: "/wallets/history" },
    ],
  },
  {
    id: 3,
    label: "Calendar",
    path: "/calendar",
    icon: <FaRegCalendarCheck  style={{ fontSize: "20px" }} />,
    children: [
      { id: 3.1, label: "Make Transfer", path: "/transfers" },
      { id: 3.2, label: "Tranfer History", path: "/transfers/history" },
    ],
  },
  {
    id: 4,
    label: "Schedule",
    path: "/schedule",
    icon: < AiOutlineSchedule style={{ fontSize: "20px" }} />,
    children: [
      { id: 4.1, label: "New Conversion", path: "/conversions" },
      { id: 4.2, label: "Conversion History", path: "/conversions/history" },
    ],
  },
  {
    id: 5,
    label: "Payment",
    path: "/payment",
    icon: <RiSecurePaymentLine style={{ fontSize: "20px" }} />,
  },
  {
    id: 6,
    label: "History",
    path: "/history",
    icon: <MdOutlineWorkHistory  style={{ fontSize: "20px" }} />,
  },
  {
    id: 7,
    label: "Setting",
    path: "/settings",
    icon: <IoSettings style={{ fontSize: "20px" }} />,
  },
];

export default SidebarMenuData;
