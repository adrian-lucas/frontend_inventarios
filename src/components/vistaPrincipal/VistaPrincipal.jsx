import Button from '@mui/material/Button'; 
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';


function VistaPrincipal(){
    return (
     <div>
        <Box className='w3-container w3-margin'>
        <Button variant="outlined" color='primary'>Hello World</Button>
        </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }} className='w3-margin w3-container'>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
            <EditIcon />
        </Fab>
        <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
        </Fab>
        <Fab aria-label="like">
            <FavoriteIcon />
        </Fab>
        </Box>
     </div>
    );
}
export default VistaPrincipal;