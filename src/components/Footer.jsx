import { Box } from '@chakra-ui/react'
import React from 'react'
import "../styles/system.css"


function Footer() {
  return (
    <>
    <Box bgColor={"#2d3e50"} h={"20vh"} fontSize={"30px"} color={"white"}>
        <div className="footer">
            Thanks For Playing Our Game
        </div>
    </Box>
    <Box textAlign={"center"} bgColor={"black"} color={"white"}>
     © Copyright 2023. All Rights Reserved
    </Box>
    </>
  )
}

export default Footer;