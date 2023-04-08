import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const userRows = [
  {
    id: 1,
    Aadhaar: 123456789012,
    Name: "John Doe",
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
