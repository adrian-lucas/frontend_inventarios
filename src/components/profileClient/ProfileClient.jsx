import { Grid } from "@mui/material";
import { Box, Stack}from "@mui/system";
import FormularioSolicitante from "../formularioSolicitante/FormularioSolicitante";

function ProfileClient(){
    return(
        <Grid container spacing={5}>
            <Grid item xs={12} >
               <Box sx={{width:'25%', margin:'auto'}}>
                    hola
                    <br />
                    hola 
                    <br />
                    hola
               </Box>
            </Grid>

            <Grid item xs={7}>
            
                <Box>
                    <FormularioSolicitante/>
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box>
                    mis vahiculos
                </Box>
            
            </Grid>

        </Grid>
    )
}
export default ProfileClient;