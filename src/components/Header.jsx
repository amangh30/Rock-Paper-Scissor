import { Box } from '@chakra-ui/react'
import React from 'react'
import "../styles/system.css"
import { Link } from "react-router-dom";
import {Text} from "@chakra-ui/react"


function Header() {
  return (
    <nav>
      <Box bgColor={"blue.900"} h={"8vh"} boxShadow={"0 2px 4px 0 rgba(0,0,0,3)"} color={"white"}>
        <Text position={"relative"} textAlign={"center"}  top={["0.55rem","0"]} fontSize={["21","34"]} fontWeight={"bold"} >Rock Paper Scissors</Text>
        <Text position={"absolute"} top={["2","1"]} fontSize={["21","30"]} fontWeight={"bold"}><Link to={"/"}>Home</Link></Text>
      </Box>
    </nav>
  )
}

export default Header