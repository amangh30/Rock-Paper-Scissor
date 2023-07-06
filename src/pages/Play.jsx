import { Box,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import img1 from "../Images/rock.jpg"
import img2 from "../Images/paper.jpg"
import img3 from "../Images/scissor.jpg"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

var b;
var c;
 const Play= ({setResponse})=> {
  const navigate = useNavigate();
  const run1 =  (e) =>{
    c=0;
    e.preventDefault();
    axios.post("https://backend-ir21.onrender.com/play",{
      input:0
    }).then(res=>{
      b = res.data;
      setResponse(res.data)
    })
    navigate("/result")
  }
  const run2 = (e) =>{
    c=1;
    e.preventDefault();
    axios.post("https://backend-ir21.onrender.com/play",{
      input:"1"
    }).then(res=>{
      b = res.data;
      setResponse(res.data)
    })
    navigate("/result")
  }
  const run3 = (e) =>{
    c=2;
    e.preventDefault();
    axios.post("https://backend-ir21.onrender.com/play",{
      input:"2"
    }).then(res=>{
      b = res.data;
      setResponse(res.data)
    })
    navigate("/result")
  }
  return (
    <>
      <Box display={"flex"} m="2" fontSize={["25","3rem"]} justifyContent={"center"} alignItems={"center"} fontWeight={"bold"} textDecoration={"underline"}>
        Make Your Choice
      </Box>
      <Box h={"100vh"} display={"flex"} flexDirection={["column","row"]} >
        <Image src={img1} cursor={"pointer"} h={["30vh","50vh"]}  m={["auto"]} borderRadius={"20px"} border={"3px solid"} onClick={run1}></Image>
        <Image src={img2} cursor={"pointer"} h={["30vh","50vh"]}  m={"auto"} borderRadius={"20px"} border={"3px solid"} onClick={run2}></Image>
        <Image src={img3} cursor={"pointer"} h={["30vh","50vh"]}  m={"auto"} w={["58vw","30vw"]} borderRadius={"20px"} border={"3px solid"} onClick={run3}></Image>
    </Box>
    </>
  )
}

export default Play;
export {b};
export {c}
