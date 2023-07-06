import React from 'react'
import {b} from "./Play"
import img1 from "../Images/rock.jpg"
import img2 from "../Images/paper.jpg"
import img3 from "../Images/scissor.jpg"
import {c} from "./Play"
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'


const Result=({response})=> {
  const navigate = useNavigate();
    const playAgain = (e)=>{
        e.preventDefault();
        navigate("/play")
    }
  var result;
  var paper = <Image src={img2} cursor={"pointer"} h={["30vh","50vh"]}  m={"auto"} borderRadius={"20px"} border={"3px solid"}></Image>
  var rock = <Image src={img1} h={["30vh","50vh"]}  m={["auto"]} borderRadius={"20px"} border={"3px solid"}></Image>
  var scissor = <Image src={img3} h={["30vh","50vh"]}  m={"auto"} w={["58vw","30vw"]} borderRadius={"20px"} border={"3px solid"} ></Image>
  if(c==0&&b=="win")
  {
  result="You Win"
  var imgy = rock
  var imgc = scissor
  }
  if(c==0&b=="lost")
  {
  result="You Lost"
  var imgy = rock
  var imgc = paper
  }
  if(c==0&b=="draw")
  {
  result="You Drew"
  var imgy = rock
  var imgc = rock
  }
  if(c==1&&b=="win")
  {
  result="You Win"
  var imgy = paper
  var imgc = rock
  }
  if(c==1&b=="lost")
  {
  result="You Lost"
  var imgy = paper
  var imgc = scissor
  }
  if(c==1&b=="draw")
  {
    result="You Drew"
    var imgy = paper
    var imgc = paper
  }
  if(c==2&&b=="win")
  {
  result="You Win"
  var imgy = scissor
  var imgc = paper
  }
  if(c==2&b=="lost")
  {
  result="You Lost"
  var imgy = scissor
  var imgc = rock
  }
  if(c==2&&b=="draw")
  {
    result="You Drew"
    var imgy = scissor
    var imgc = scissor
  }
  return (
    <>
    <Box h={["120vh","160vh"]}>
    <Box textAlign={"center"} fontWeight={"bold"} fontSize={"3rem"} marginBottom={"1rem"}>{result}</Box>
    <hr />
    <hr />
    <Box display={"flex"} flexDirection={"column"} m={"1rem"} gap={"2rem"}>
      <Text textAlign={"center"} fontWeight={"bold"} fontSize={"2rem"} textDecoration={"underline"}>You Chose</Text>
      {imgy}
      <Text textAlign={"center"} fontWeight={"bold"} fontSize={"2rem"} textDecor={"underline"}>Machine Chose</Text>
      {imgc}
    </Box>
    <Button  colorScheme='blue' fontWeight={"bold"} display={"block"} m={"2rem auto"} onClick={playAgain}>Play Again</Button>
    </Box>
    </>
  )
}

export default Result
