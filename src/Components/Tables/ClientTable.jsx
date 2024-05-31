import { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { MdDelete } from "react-icons/md";
import Panel from "../Panel/Panel";
import Search from "../Input/Search";
import axios from "axios";

import { Modal } from "antd";
import AuthContext from "../../Context/AuthContext";
import { toast } from "react-toastify";

export default function ClientTable() {
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;
  const [search, setSearch] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [selectedClient, setSelectedClient] = useState({});
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);

  const getClientInformation = async () => {
    try {
      const res = await axios.get(
        `https://plaintiff-backend.onrender.com/api_v1/get_Clients/${id}`
      );
      setClients(res?.data?.data || []);
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id) {
      getClientInformation();
    }
  }, [id]);

  useEffect(() => {
    const filtered = clients?.filter((item) => {
      const firstNameMatch = item?.FirstName?.toLowerCase().includes(
        search.toLowerCase()
      );
      const lastNameMatch = item?.LastName?.toLowerCase().includes(
        search.toLowerCase()
      );
      return firstNameMatch || lastNameMatch;
    });
    setFilteredClients(filtered);
  }, [clients, search]);

  const handleDelete = async () => {
    const { caseID, clientID } = selectedClient;
    console.log(selectedClient,id)

    try {
      await axios.delete(
        `https://plaintiff-backend.onrender.com/api_v1/client/delete/${id}/${clientID}/${caseID}`
      );
      toast.success("Deleted Successfully");
      getClientInformation();
      setDeleted(false); 
    } catch (err) {
      console.error("Error deleting client:", err);
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };

  const showDeleteModal = (caseID, clientID) => {
    console.log(caseID,clientID)

    setSelectedClient({ caseID, clientID });
    setDeleted(true);
  };



  return (
    <>
      <div className="mt-8">
        <Panel title="Client History">
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          <Table
            removeWrapper
            isStriped
            aria-label="Client Table"
            classNames={{
              th: "px-5 py-4 text-left bg-blue-900 text-green-50",
              td: "px-5 py-5",
            }}
          >
            <TableHeader>
              <TableColumn>First Name</TableColumn>
              <TableColumn>Last Name</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Phone Number</TableColumn>
              <TableColumn>Address</TableColumn>
              <TableColumn>Gender</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No rows to display."}>
              {filteredClients?.map((row) => (
                <TableRow key={row?.id} className="h-14 py-5">
                  <TableCell>{row?.FirstName}</TableCell>
                  <TableCell>{row?.LastName}</TableCell>
                  <TableCell>{row?.Email}</TableCell>
                  <TableCell>{row?.ContactNumber}</TableCell>
                  <TableCell>{row?.Address}</TableCell>
                  <TableCell>{row?.Gender}</TableCell>
                  <TableCell>
                    <MdDelete
                      className="text-xl cursor-pointer"
                      onClick={() => showDeleteModal(row?.CaseID, row?.ClientID)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
      </div>
      <Modal
        open={deleted}
        onOk={handleDelete}
        onCancel={() => setDeleted(false)}
        okButtonProps={{
          className: "bg-blue-900 text-white rounded w-10 text-sm px-2",
          size: "small",
        }}
        okText="Yes"
        cancelButtonProps={{ hidden: true }}
      >
        <h1>
          <p className="text-red-700">
            Are you sure you want to delete this client?
          </p>
        </h1>
      </Modal>
    </>
  );
}
