import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import { useState } from "react";
import creditcard from "../../assets/creditcard.png"

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState('')


  const paymentPlans = {
    Free: 0,
    Essential: 30000,
    Advance: 60000
    
  };

  // Function to handle change in payment plan selection
  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value); // Update selected plan
  };

  return (
    <>
      <DashboardLayout>
        <PageHeader title="Payment" />
        <div className="paymentHolder">
          <div className="paymentWrap">
            <div className="paymentImageWrap">
              <img src={creditcard} alt="" />
            </div>
            <div className="paymentInputWrap">
              <h1>Payment Plans</h1>

              <div className="payplan" style={{color:"#003482ff", fontWeight: "700" }}>
                <label htmlFor="paymentPlan">Select a payment plan:</label>
                <select
                  id="paymentPlan"
                  value={selectedPlan}
                  onChange={handlePlanChange}
                >
                  <option value="">Select</option>
                  {Object.keys(paymentPlans).map((plan) => (
                    <option key={plan} value={plan}>
                      {plan}
                    </option>
                  ))}
                </select>
              </div>
              <div className="payAmount">
                <label style={{color:"#003482ff", fontWeight: "700" }}htmlFor="selectedAmount">Selected amount:</label>
                <input
                  type="text"
                  id="selectedAmount"
                  value={paymentPlans[selectedPlan]}
                  readOnly
                />
              </div>

              <div className="payBtn">
                <button>Pay</button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
