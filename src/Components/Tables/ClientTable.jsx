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
export default function ClientTable() {
  return (
    <>
      <div className="mt-8">
        <Panel title="Client History">
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
              <TableColumn>Case Title</TableColumn>
              <TableColumn>Case Description</TableColumn>
            </TableHeader>

            <TableBody
              className="bg-blue-800"
              emptyContent={"No rows to display."}
            >
              <TableRow className="h-14 py-5">
                <TableCell>Lorem ipsum dolor </TableCell>
                <TableCell>Lorem, ipsum dolor.</TableCell>
                <TableCell>Lorem, ipsum.</TableCell>
                <TableCell>lorem</TableCell>
                <TableCell>Lorem ipsum dolor sit.</TableCell>
                <TableCell>hi</TableCell>
                <TableCell>hi</TableCell>
                <TableCell >
                  Lorem ipsum dolor sit amet consectetur, 
                 
                </TableCell>
              </TableRow>
              <TableRow className="h-14 py-5">
                <TableCell>Lorem ipsum dolor </TableCell>
                <TableCell>Lorem, ipsum dolor.</TableCell>
                <TableCell>Lorem, ipsum.</TableCell>
                <TableCell>lorem</TableCell>
                <TableCell>Lorem ipsum dolor sit.</TableCell>
                <TableCell>hi</TableCell>
                <TableCell>hi</TableCell>
                <TableCell >
                  Lorem ipsum dolor sit amet consectetur, 
                 
                </TableCell>
              </TableRow>
              <TableRow className="h-14 py-5">
                <TableCell>Lorem ipsum dolor </TableCell>
                <TableCell>Lorem, ipsum dolor.</TableCell>
                <TableCell>Lorem, ipsum.</TableCell>
                <TableCell>lorem</TableCell>
                <TableCell>Lorem ipsum dolor sit.</TableCell>
                <TableCell>hi</TableCell>
                <TableCell>hi</TableCell>
                <TableCell >
                  Lorem ipsum dolor sit amet consectetur, 
                 
                </TableCell>
              </TableRow>
              <TableRow className="h-14 py-5">
                <TableCell>Lorem ipsum dolor </TableCell>
                <TableCell>Lorem, ipsum dolor.</TableCell>
                <TableCell>Lorem, ipsum.</TableCell>
                <TableCell>lorem</TableCell>
                <TableCell>Lorem ipsum dolor sit.</TableCell>
                <TableCell>hi</TableCell>
                <TableCell>hi</TableCell>
                <TableCell >
                  Lorem ipsum dolor sit amet consectetur, 
                 
                </TableCell>
              </TableRow>
              <TableRow className="h-14 py-5">
                <TableCell>Lorem ipsum dolor </TableCell>
                <TableCell>Lorem, ipsum dolor.</TableCell>
                <TableCell>Lorem, ipsum.</TableCell>
                <TableCell>lorem</TableCell>
                <TableCell>Lorem ipsum dolor sit.</TableCell>
                <TableCell>hi</TableCell>
                <TableCell>hi</TableCell>
                <TableCell >
                  Lorem ipsum dolor sit amet consectetur, 
                 
                </TableCell>
              </TableRow>
              <TableRow className="h-14 py-5">
                <TableCell>Lorem ipsum dolor </TableCell>
                <TableCell>Lorem, ipsum dolor.</TableCell>
                <TableCell>Lorem, ipsum.</TableCell>
                <TableCell>lorem</TableCell>
                <TableCell>Lorem ipsum dolor sit.</TableCell>
                <TableCell>hi</TableCell>
                <TableCell>hi</TableCell>
                <TableCell >
                  Lorem ipsum dolor sit amet consectetur, 
                 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Panel>
      </div>
    </>
  );
}
