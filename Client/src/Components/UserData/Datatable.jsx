import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../UserData/DataSource";
import { useGlobalContext } from "../../context/dataContext";
// import { useContext } from "react";

export default function DataTable() {
  // const [data, setData] = React.useState();
  const context = useGlobalContext();
  const userRows = [
    {
      id: 1,
      Aadhaar: 123456789012,
      Name: context,
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
    },
    {
      id: 2,
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
    },
    {
      id: 3,
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
    },
    {
      id: 4,
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
    },
    {
      id: 5,
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
    },
    {
      id: 6,
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
    },
    {
      id: 7,
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
    },
    {
      id: 8,
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
    },
    {
      id: 9,
      Aadhaar: 123456789012,
      Name: "John Doe",
      Age: 25,
      VoterID: 123456789012,
      Mobile: 1234567890,
      Account: 123456789012,
    },
  ];
  return (
    <div
      style={{
        height: "92vh",
        width: "100%",
        fontSize: "20px",
        textAlign: "center",
      }}
    >
      <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
