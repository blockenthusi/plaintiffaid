
import DashboardLayout from "../../Pages/Dashboard/Dashboard";
import PageHeader from "../Header/PageHeader";
import ClientTable from "../Tables/ClientTable";


export default function Clients() {
  return (
    <>
      <DashboardLayout>
        <PageHeader title="Client Data" />
        <ClientTable/>
       
      </DashboardLayout>
    </>
  );
}
