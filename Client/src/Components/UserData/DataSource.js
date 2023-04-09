import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "Aadhaar",
    headerName: "Aadhar Number",
    width: 130,
  },
  { field: "Name", headerName: "Name", width: 130 },
  {
    field: "Age",
    headerName: "Age",
    type: "number",
    width: 120,
  },
  {
    field: "VoterID",
    headerName: "VoterID",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  },
  {
    field: "Mobile",
    headerName: "Mobile",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  },
  {
    field: "Account",
    headerName: "Account ID",
    description: "This column has a value getter and is not sortable.",
    width: 200,
  },
  {
    field: "Accept",
    description: "This column has a value getter and is not sortable.",
    width: 120,
    renderCell: (params) => {
      return (
        <>
          <Button variant="outlined" color="success" size="small">
            ACCEPT
          </Button>
        </>
      );
    },
  },
  {
    field: "Reject",
    description: "This column has a value getter and is not sortable.",
    width: 120,
    renderCell: (params) => {
      return (
        <>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
          >
            DELETE
          </Button>
        </>
      );
    },
  },
];
