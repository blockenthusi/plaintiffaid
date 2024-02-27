import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import "./Route.css"

export default function Setting() {
  return (
    <>
      <DashboardLayout>
        <PageHeader title="Settings Page" />
        <div className="settings    h-40 w-full ">
          <p className="description">Firm Information</p>

          <div className="settingDetails">
            <div className="settingDetailsWrap">
              <div className="fields">
                <div className="inputField">
                  <div className="inputFieldTop">
                    <p>Firm Name</p></div>
                  <div className="inputFieldBottom"></div>
                </div>
                <div className="inputfield">
                <div className="inputFieldTop">
                  <p>Firm Description</p>
                </div>
                  <div className="inputFieldBottom"></div>
                </div>
              </div>
              <div className="fields">
                <div className="inputField">
                  <div className="inputFieldTop">
                    <p>Email</p>
                  </div>
                  <div className="inputFieldBottom"></div>
                </div>
                <div className="inputfield">
                <div className="inputFieldTop">
                  <p>Location</p>
                </div>
                  <div className="inputFieldBottom"></div>
                </div>
              </div>
              <div className="fields">
                <div className="inputField">
                  <div className="inputFieldTop">
                    <p>Phone Number</p>
                  </div>
                  <div className="inputFieldBottom"></div>
                </div>
                <div className="inputfield">
                <div className="inputFieldTop">
                  <p>Current Country</p>
                </div>
                  <div className="inputFieldBottom"></div>
                </div>
              </div>

              <div className="edit">
                <button>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
