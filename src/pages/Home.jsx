import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img1 from "../Images/img1.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img2 from "../Images/img2.jpg"
import { Box,Image,Button } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    const navigatePlay = (e)=>{
        e.preventDefault();
        navigate("/play")
    }
  return (
    <>
    <section>
    <Box h={["60vh","135vh"]} zIndex={"1"}>
        <Carousel autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}>
            <Box w={'full'} minH={'100vh'}>
                <Image src={img1} h={['56vh','full']} w={'full'} objectFit={'cover'}></Image>
            </Box>
            <Box w={'full'} minH={'100vh'} maxH={'100vh'}>
                <Image src={img2} h={'100%'} w={'100%'} objectFit={'contain'} ></Image>
            </Box>
        </Carousel>
    </Box>
    <Box h={"15vh"}>
        <Button  colorScheme='blue' fontWeight={"bold"} display={"block"} m={"auto"} onClick={navigatePlay}>
            Play Now
        </Button>
    </Box>
    </section>
    </>
  )
}

export default Home