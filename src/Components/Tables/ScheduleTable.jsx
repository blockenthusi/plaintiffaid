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

export default function ScheduleTable() {
  return (
    <div className="mt-8">
      <Panel title="Schedule History">
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
            <TableColumn>Client Name </TableColumn>
            <TableColumn>Email </TableColumn>
            <TableColumn>Date for Appointment</TableColumn>
            <TableColumn> Time of Appointement</TableColumn>
            <TableColumn>Schedule Detail</TableColumn>
          </TableHeader>

          <TableBody emptyContent={"No rows to display."}></TableBody>
        </Table>
      </Panel>
    </div>
  );
}
