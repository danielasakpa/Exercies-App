import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';


const ExerciseVideos = ({ exerciseVideos, name }) => {
    
    if (!exerciseVideos.length) return <Loader />;
    
    return (
        <Box sx={{ marginTop: { lg: '203px', xs: '20px' }, marginBottom: {xs: "30px"} }} p="20px">
          <Typography variant="h3" sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
              Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
          </Typography>
          <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
          {
             exerciseVideos?.slice(0, 3)?.map((item, index) => (
                 <a 
                   key={index}
                   className="exercise-video"
                   href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                   target="_blank"
                   rel="noreferrer"
                  > 
                 <img style={{ borderTopLeftRadius: '20px', height: "250px" }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                 <Box>
                     <Typography variant="h4" color="#000">
                          {item.video.title}
                     </Typography>
                     <Typography variant="h6" color="#000">
                          {item.video.channelName}
                     </Typography>
                 </Box>
                 </a>
             ))
            }
        </Stack>
        </Box>
    )
}

export default ExerciseVideos;