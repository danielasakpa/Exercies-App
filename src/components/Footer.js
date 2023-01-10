import {Box, Stack, Typography} from "@mui/material"
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
    return (
      <Box mt="80px" bgcolor="#FFF3F4">
        <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px" >
           <img src={Logo} gap="40px" alt="footer Logo" style={{ width: '200px', height: '41px' }} />
        </Stack>
        <Typography variant="h5" mt="41px" textAlign="center" pb="40px">
            Made with React by Daniel Asakpa
        </Typography>
      </Box>
    )
}

export default Footer;