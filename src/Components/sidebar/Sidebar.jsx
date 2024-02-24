import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import SidebarMenuData from "../../data/SideBarMenu";

export default function Sidebar() {
  const menu = SidebarMenuData;
  const location = useLocation();

  return (
    <>
      <aside className="sidebar w-[250px]">
        <div className="sidebar__brand flex items-center justify-center  bg-white px-4 py-2">
          <img
            src={logo}
            alt="plaintiffaid logo"
            className="w-full h-10  flex items-center justify-center "
          />
        </div>

        <div className=" sidebar__menu__container rounded-tr-[40px] mt-7 h-full pt-4  bg-blue-900">
          <div className="container">
            <ul className="mb-6 flex flex-col justify-center  w-full ">
              {menu.map((menuItem) => (
                <li
                  key={menuItem.id}
                  className="text-white "
                  style={{
                    color:
                      location.pathname === menuItem.path ? "#55dbcb" : "#ffffff",
                  }}
                >
                  <NavLink
                    to={menuItem.path}
                    className="group relative cursor-pointer flex items-center  gap-3 rounded-sm py-2 px-3 text-[15px]  w-full  capitalize whitespace-nowrap h-10  duration-300 ease-in-out hover:bg-[white] hover:text-blue-900"
                  >
                    {menuItem.icon}
                    {menuItem.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
