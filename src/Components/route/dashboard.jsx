import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import { GoPeople } from "react-icons/go";
import { GrScheduleNew } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function Dashboards() {
  return (
    <>
      <DashboardLayout>
         <PageHeader title="Dashboard"/>
         <div className="dashboardWrap">
          <div className="dashboardLeft">
            <div className="total">
              <div className="toplayer">
                <h3>Total Clients</h3>
              </div>
              <div className="lowerLayer"></div>
            </div>
            <div 
            style={{backgroundColor: "#e0fbfc",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;"}}
            className="total"
            >
              <div className="toplayer" style={{color: "#003482ff"}}>
              <h3>Total schedules</h3>
              </div>
                 
              <div className="lowerLayer"></div>
              </div>
              
            <div style={{backgroundColor: "#98c1d9"}}className="total" >
            
              <div className="toplayer">
                <h3>Total Payments</h3>
              </div>
              <div className="lowerLayer"></div>
            </div>
          </div>
          <div className="dashbaordRight">
            <div className="quickAccess">
               <MdPayment style={{color: "#003482ff"}}/>
               <Link  to="/payments"className="link">
               <p>Get a payment plan</p> 
               </Link>
              
            </div>
            <div style={{backgroundColor: "#98c1d9"}}className="quickAccess">
               <IoPersonAddOutline  style={{color: "#003482ff"}} />
              <Link to="/clients"className="link" >
              <p>Add a client</p>
              </Link>
              
            </div>
            <div className="quickAccess">
            <GrScheduleNew style={{color: "#003482ff"}} />
            <Link  to="/schedules"className="link">
            <p>Schedule an appointment</p>
            </Link>
              
            </div>
            <div className="upcomingEvents">
              <p>Upcoming Events</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
