import {Box, Stack, Typography, Button} from "@mui/material"
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
    return (
      <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize: {lg: "44px", xs: "40px"}}}  mb="23px" mt="30px">
           Sweat, smile <br/> and Repeat
        </Typography>
        <Typography fontszie="22px" lineHeight="35px" mb={4}>
           Check out the most effective exercises personalized to you
        </Typography>
        <Button variant='contained' color="error" mb="3" href="#exercises" sx={{backgroundColor: "#FF2625", padding: "10px"}}>
           Explore Exercises
        </Button>
        <Typography fontWeight={600} color="#FF2625"  sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
           Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
      </Box>
    )
}

export default HeroBanner;