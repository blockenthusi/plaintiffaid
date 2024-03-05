import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import Panel from "../Panel/Panel";
import Search from "../Input/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import Delete from "../../Pages/DeleteAction/Delete";
export default function ClientTable() {
  const id = JSON.parse(localStorage.getItem("user"))?.UserID;
  const [client, setClient] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");


  const getClientInformation = async () => {
    try {
      const res = await axios.get(
        `https://plaintiff-backend.onrender.com/api_v1/getClients/${id}`
      );
      setClient(res?.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getClientInformation();
  }, []);

  const result = client.filter((item) => {
    const FirstName = item.FirstName.toString();
    const LastName = item.LastName.toLowerCase().includes(search.toLowerCase());
    const Matched = FirstName.includes(search.toLowerCase());
    return LastName || Matched;
  });

  useEffect(() => {
    setFilter(result);
  }, [search, client]);

  return (
    <>
      <div className="mt-8">
        <Panel title="Client History">
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
          <Table
            removeWrapper
            isStriped
            aria-label="Wallets"
            classNames={{
              th: "px-5 py-4 text-left bg-blue-900 text-green-50",
              td: "px-5 py-5",
            }}
          >
            <TableHeader>
              <TableColumn>First Name </TableColumn>
              <TableColumn>Last Name </TableColumn>
              <TableColumn>Email </TableColumn>
              <TableColumn>Phone Number</TableColumn>
              <TableColumn> Address</TableColumn>
              <TableColumn>Gender</TableColumn>
              {/* {/* <TableColumn>Case Title</TableColumn> */}
              {/* <TableColumn>Action</TableColumn>  */}
            </TableHeader>

            <TableBody emptyContent={"No rows to display."}>
              {result?.map((row) => (
                <TableRow key={row.id} className="h-14 py-5">
                  <TableCell>{row.FirstName}</TableCell>
                  <TableCell>{row.LastName}</TableCell>
                  <TableCell>{row.Email}</TableCell>
                  <TableCell>{row.ContactNumber}</TableCell>
                  <TableCell>{row.Address}</TableCell>
                  <TableCell>{row.Gender}</TableCell>
                  {/* <TableCell onClick={() =>setRemove(true)}>{row.Delete}</TableCell>
                  {remove?
                  <Delete/>: null} */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Panel>
      </div>
    </>
  );
}
