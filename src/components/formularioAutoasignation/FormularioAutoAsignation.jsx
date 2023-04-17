import {
  Button,
  Select,
  TextField,
  FormControl,
  InputLabel,
  Card,
  CardMedia,
   
} from "@mui/material";
import { Box, Stack}from "@mui/system";


function FormularioAutoAsignation() {
  return (
    <div>
      
        <form style={{ width: "100%" }}>
          <Stack spacing={2}
            justifyContent="center"
            alignItems="center"
            margin = "15px"
      
            >
            <FormControl fullWidth>
              <InputLabel>Zona de Parqueo</InputLabel>
              <Select
                labelId="zona-parqueo-label"
                id="outlined-name"
                label="Zona de Parqueo"
              />
            </FormControl>
          
            <Stack direction={"row"} sx={{width:'100%'}} spacing={5}>
            <TextField
              sx={{ width: "50%" }}
              type="date"
              label="Fecha Inicio"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              sx={{ width: "50%" }}
              type="date"
              id="outlined-uncontrolled"
              label="Fecha Fin"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            </Stack>
          
          
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
          
          
            <FormControl fullWidth>
              <InputLabel id="espacio-parqueo-label">Tipo de Pago</InputLabel>
              <Select
                labelId="espacio-parqueo-label"
                id="outlined-name"
                label="Tipo de Pago"
              />
            </FormControl>
          
          
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
          
          
            <Card>
              <CardMedia
                sx={{ height: 140, width:350}}
                image="https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png"
                title="default-image"
              />
            </Card>

            </Stack>
            <Stack
              sx={{justifyContent:"center",
              alignItems:"center",
              margin:'10%'}}
              direction={"row"} 
              spacing={'auto'}
            >
              <Button>Pagar Ahora</Button>
              <Button>Pagar después</Button>
              <Button>Cancelar</Button>
            </Stack>
            
        </form>
      
    </div>
  );
}
export default FormularioAutoAsignation;
