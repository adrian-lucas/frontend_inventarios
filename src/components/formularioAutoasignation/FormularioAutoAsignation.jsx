import {
  Button,
  Select,
  TextField,
  FormControl,
  InputLabel,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import { Box, Stack } from "@mui/system";

function FormularioAutoAsignation() {
  return (
    <div>
      <Stack>
        <form style={{ width: "100%" }}>
          <Box sx={{ margin: "15px" }}>
            <FormControl fullWidth>
              <InputLabel>Zona de Parqueo</InputLabel>
              <Select
                labelId="zona-parqueo-label"
                id="outlined-name"
                label="Zona de Parqueo"
              />
            </FormControl>
          </Box>

          <Box sx={{ margin: "15px" }}>
            <TextField
              sx={{ width: "50%" }}
              type="date"
              id="outlined-name"
              label="Fecha Inicio"
              variant="outlined"
            />
            <TextField
              sx={{ width: "50%" }}
              type="date"
              id="outlined-uncontrolled"
              label="Fecha Fin"
              variant="outlined"
            />
          </Box>
          <Box sx={{ margin: "15px" }}>
            <FormControl fullWidth>
              <InputLabel id="espacio-parqueo-label">
                Espacio de Parqueo
              </InputLabel>
              <Select
                labelId="espacio-parqueo-label"
                id="outlined-name"
                label="Espacio de Parqueo"
              />
            </FormControl>
          </Box>
          <Box sx={{ margin: "15px" }}>
            <FormControl fullWidth>
              <InputLabel id="espacio-parqueo-label">Tipo de Pago</InputLabel>
              <Select
                labelId="espacio-parqueo-label"
                id="outlined-name"
                label="Tipo de Pago"
              />
            </FormControl>
          </Box>
          <Box sx={{ margin: "15px" }}>
            <FormControl fullWidth>
              <InputLabel id="espacio-parqueo-label">
                Periodo de tiempo entre cuotas
              </InputLabel>
              <Select
                labelId="espacio-parqueo-label"
                id="outlined-name"
                label="Periodo de tiempo entre cuotas"
              />
            </FormControl>
          </Box>
          <Box>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png"
                title="default-image"
              />
            </Card>
          </Box>
          <Box>
            <Grid container spacing={0} justifyContent="center">
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button>Pagar Ahora</Button>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button>Pagar después</Button>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button>Cancelar</Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Stack>
    </div>
  );
}
export default FormularioAutoAsignation;
