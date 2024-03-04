import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import Panel from "../Panel/Panel";
import axios from "axios";
import Search from "../Input/Search";

export default function DataTable() {
    // const id = JSON.parse(localStorage.getItem("user"))?.UserID;
    // const [client, setClient] = useState([]);
    // const [filter, setFilter] = useState([]);
    // const [search, setSearch] = useState("");
  
    // const getSchedule = async () => {
    //   try {
    //     const res = await axios.get(
    //       `https://plaintiff-backend.onrender.com/api_v1/getClients/${id}`
    //     );
    //     setClient(res?.data.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // useEffect(() => {
    //     getSchedule();
    // }, []);
  
    // const result = client.filter((item) => {
    //   const FirstName = item.FirstName.toString();
    //   const LastName = item.LastName.toLowerCase().includes(search.toLowerCase());
    //   const Matched = FirstName.includes(search.toLowerCase());
    //   return LastName || Matched;
    // });
  
    // useEffect(() => {
    //   setFilter(result);
    // }, [search, client]);

    // console.log(client)


  return (
    <div className="mt-8">
      <Panel title="History">
        <Search />
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
          </TableHeader>

          <TableBody emptyContent={"No rows to display."}>
            
          </TableBody>
        </Table>
      </Panel>
    </div>
  );
}
