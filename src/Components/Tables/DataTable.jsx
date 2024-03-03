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

export default function DataTable() {
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

          <TableBody emptyContent={"No rows to display."}></TableBody>
        </Table>
      </Panel>
    </div>
  );
}
