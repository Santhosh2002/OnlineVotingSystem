import "./Table.scss";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableCom = () => {
  const rows = [
    {
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
      Status: "Approved",
    },
    // generate similar data witrh different values
    {
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
      Status: "Pending",
    },
    {
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
      Status: "Approved",
    },
    {
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
      Status: "Approved",
    },
    {
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
      Status: "Approved",
    },
    {
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
      Status: "Approved",
    },
    {
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
      Status: "Approved",
    },
    {
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
      Status: "Approved",
    },
    {
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
      Status: "Approved",
    },
  ];
  return (
    <div>
      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCellt">Aadhaar</TableCell>
                <TableCell className="tableCellt">Name</TableCell>
                <TableCell className="tableCellt">Age</TableCell>
                <TableCell className="tableCellt">VoterID</TableCell>
                <TableCell className="tableCellt">Mobile</TableCell>
                <TableCell className="tableCellt">Account</TableCell>
                <TableCell className="tableCellt">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Aadhaar}>
                  <TableCell className="tableCell" component="th" scope="row">
                    {row.Aadhaar}
                  </TableCell>
                  <TableCell className="tableCell">{row.Name}</TableCell>
                  <TableCell className="tableCell">{row.Age}</TableCell>
                  <TableCell className="tableCell">{row.VoterID}</TableCell>
                  <TableCell className="tableCell">{row.Mobile}</TableCell>
                  <TableCell className="tableCell">{row.Account}</TableCell>
                  <TableCell className="tableCell">
                    <span className={`status ${row.Status}`}>{row.Status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default TableCom;
