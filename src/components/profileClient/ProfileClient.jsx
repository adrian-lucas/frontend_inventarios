import { Grid, Avatar } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FormularioSolicitante from "../formularioSolicitante/FormularioSolicitante";

function ProfileClient() {
  return (
    <Grid container spacing={5} sx={{ margin: "15px" }}>
      <Grid item xs={12}>
        <Box sx={{ width: "10%", margin: "auto" }}>
          <Avatar
            sx={{ width: "100%", height: "100%" }}
            alt="Remy Sharp"
            src="https://previews.123rf.com/images/yupiramos/yupiramos1712/yupiramos171220597/92183510-hombre-avatar-perfil-icono-imagen-vector-ilustraci%C3%B3n-dise%C3%B1o.jpg"
          />
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Box>
          <FormularioSolicitante />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>mis vahiculos</Box>
      </Grid>
    </Grid>
  );
}
export default ProfileClient;
