import { FaHome } from "react-icons/fa";

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
    icon: <FaHome style={{ fontSize: "19px" }} />,
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
    icon: <FaHome style={{ fontSize: "20px" }} />,
    children: [
      { id: 3.1, label: "Make Transfer", path: "/transfers" },
      { id: 3.2, label: "Tranfer History", path: "/transfers/history" },
    ],
  },
  {
    id: 4,
    label: "Schedule",
    path: "/schedule",
    icon: <FaHome style={{ fontSize: "20px" }} />,
    children: [
      { id: 4.1, label: "New Conversion", path: "/conversions" },
      { id: 4.2, label: "Conversion History", path: "/conversions/history" },
    ],
  },
  {
    id: 5,
    label: "Payment",
    path: "/payment",
    icon: <FaHome style={{ fontSize: "20px" }} />,
  },
  {
    id: 6,
    label: "History",
    path: "/history",
    icon: <FaHome style={{ fontSize: "20px" }} />,
  },
  {
    id: 7,
    label: "Setting",
    path: "/settings",
    icon: <FaHome style={{ fontSize: "20px" }} />,
  },
];

export default SidebarMenuData;
