import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { userRows, userColumns } from "../UserData/DataSource";

export default function DataTable() {
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
