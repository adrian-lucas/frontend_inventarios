import {Button,TextField} from '@mui/material';
import { Box } from '@mui/system';

function FormularioSolicitante({solicitante}){
return (
    <div>
      <form style={{width:'100%'}}>
        <Box sx={{ margin:'15px'}}>
            <TextField
                id="outlined-name"
                label="Nombre"
                value={solicitante.name}
                variant="outlined"
                fullWidth
                contentEditable="false"

            />
        </Box>
        <Box sx={{ margin:'15px'}}>
            <TextField
                id="outlined-name"
                label="Apellido Paterno"
                value={solicitante.apPaterno}
                variant="outlined"
                fullWidth
                contentEditable="false"

            />
        </Box>
        <Box sx={{ margin:'15px'}}>
            <TextField
                id="outlined-name"
                label="Apellido Materno"
                value={solicitante.apMaterno}
                variant="outlined"
                fullWidth
                contentEditable="false"

            />
        </Box>

        <Box sx={{margin:'15px'}}>
        <TextField
            id="outlined-name"
            label="CI"
            value={solicitante.ci}
            variant="outlined"
            contentEditable="false"
            disabled
            />
            <TextField
            id="outlined-uncontrolled"
            label="Cargo"
            defaultValue={solicitante.cargo}
            variant="outlined"
            contentEditable="false"
            disabled
            />
        </Box>
        <Box sx={{ margin:'15px'}}>
            <TextField
                id="outlined-name"
                label="Correo electrónico"
                value={solicitante.email}
                variant="outlined"
                fullWidth
                contentEditable="false"
                disabled

            />
        </Box>
        <Box sx={{ margin:'15px'}}>
            <TextField
                id="outlined-name"
                label="Celular"
                value={solicitante.celular}
                variant="outlined"
                fullWidth
                contentEditable="false"

            />
        </Box>
        <Box sx={{ margin:'15px'}}>
            <TextField
                id="outlined-name"
                label="Dirección"
                value={solicitante.direccion}
                variant="outlined"
                fullWidth
                contentEditable="false"

            />
        </Box>
      </form>
    </div>
);
}
export default FormularioSolicitante;