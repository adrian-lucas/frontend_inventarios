import DATA from "./mockDataSolicitantes.json";
import { Link, Navigate } from "react-router-dom";
import {
  Dialog,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { green, red, yellow } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useState } from "react";
import FormularioSolicitante from "../formularioSolicitante/FormularioSolicitante";
function TableSolicitantes() {
  const [open, setOpen] = useState(false);
  const [solicitante, setSolicitante] = useState({});

  const TABLE_HEAD = [
    { id: 1, label: "Nombre Solicitante" },
    { id: 2, label: "Carnet Identidad" },
    { id: 3, label: "Cargo" },
    { id: 4, label: "Correo Electrónico" },
    { id: 5, label: "Estado" },
  ];

  const handleOpen = (user) => {
    return (
      <Navigate to="/solicitante">
        {<FormularioSolicitante solicitante={user} />}
      </Navigate>
    );
  };
  /**
   * Cambia el estado open a false (cierra el dialogo)
   * @function handleClose
   */
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ backgroundColor: "#D9D5EC" }}>
      <div className="">
        <div className="w3-content  ">
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#404040" }}>
                <TableRow>
                  {TABLE_HEAD.map((cell) => (
                    <TableCell
                      key={cell.id}
                      sx={{ color: "white", textAlign: "center" }}
                    >
                      <Typography>{cell.label}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {DATA.map((user) => (
                  <TableRow
                    key={user.id}
                    hover
                    onClick={() => handleOpen(user)}
                  >
                    <TableCell
                      sx={{ textAlign: "center" }}
                    >{`${user.name} ${user.apPaterno} ${user.apMaterno}`}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {user.ci}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {user.cargo}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {user.email}
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          p: 0.5,
                          px: 1,
                          borderRadius: 2,
                          width: "auto",
                          background:
                            user.estado === "Pendiente"
                              ? yellow[900]
                              : user.estado === "Rechazado"
                              ? red[500]
                              : green[500],
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "white",
                            lineHeight: 1,
                            letterSpacing: 0.5,
                          }}
                        >
                          {user.estado}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog
            open={open}
            keepMounted
            PaperProps={{ style: { borderRadius: 15 } }}
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{ width: "100%" }}
          >
            <FormularioSolicitante solicitante={solicitante} />
          </Dialog>
        </div>
      </div>
    </div>
  );
}
export default TableSolicitantes;
