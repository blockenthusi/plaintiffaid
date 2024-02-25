import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import Panel from "../Panel/Panel";
export default function ClientTable() {
  return (
    <>
      <Panel title="Client History">
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
            <TableColumn>Case Title</TableColumn>
            <TableColumn>Case Description</TableColumn>
          </TableHeader>

          <TableBody
            className="bg-blue-800"
            emptyContent={"No rows to display."}
          >
            <TableRow className="h-14 py-5">
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                vitae magnam ipsum nisi eos? Asperiores molestiae nemo error
                totam dolorum.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Panel>
    </>
  );
}
