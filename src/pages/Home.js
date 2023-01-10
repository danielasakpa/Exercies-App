import {useState} from "react"
import {Box} from "@mui/material"

import HeroBanner from "../components/HeroBanner"
import SearchExercies from "../components/SearchExercies"
import Exercies from "../components/Exercies"


const Home = () => {
    
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    
    
    return (
      <Box>
        <HeroBanner />
        <SearchExercies setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercies setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
      </Box>
    )
}

export default Home;