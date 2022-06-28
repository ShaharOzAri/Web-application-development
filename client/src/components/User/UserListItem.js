import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../controller/UserController";
import { useState, useEffect } from "react";
import { SuccessSnackbar } from "../Utils/Snackbar";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "first_name",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "last_name",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
    editable: true,
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,
    editable: true,
  },
];

export default function DataGridDemo() {
  const [users, setUsers] = useState(null);

  const getAll = async () => {
    var recivedUsers = await getAllUsers();
    if (recivedUsers.status == 200) {
      var data = recivedUsers.data.msg;
      for (var i = 0; i < data.length; i++) {
        data[i].id = i + 1;
      }
      console.log(data);
      setUsers(data);
      //   console.log(data);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const navigate = useNavigate();
  return (
    <Container style={{ height: 400, width: "60%" }}>
      <DataGrid
        sx={{
          backgroundColor: "#e0d9cc",
          borderColor: "black",
        }}
        onRowClick={(params, event) => {
          event.preventDefault();
          navigate(`/admin/user/${params.row._id}`);
        }}
        rows={users != null ? users : []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        disableSelectionOnClick
      />
    </Container>
  );
}
