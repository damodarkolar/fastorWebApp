import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { fetchRegisterUser } from '../redux/Authentication/actions'


export const MobileNumberEntryPage = () => {
  const dispatch=useDispatch
  const navigate=useNavigate();
  const [phoneNumber, setPhoneNumber]=useState("")

  const handleEnterMobileNumber=(e)=>{
    const {name, value}=e.target
    setPhoneNumber(()=>(value))
  }

  const handleSendOtp=()=>{
    // dispatch(fetchRegisterUser(phoneNumber,"+91"))
    navigate("/otpEntry")

  }



  return (
    <>
    <div width="500px">
    <Heading as='h2' size='xl'>
    Enter Your Mobile Number
  </Heading>
  <Text fontSize='xl'>We will send you the digit verification code </Text>
  <Input onChange={handleEnterMobileNumber} placeholder='Enter Your Phone Number' size='lg' name="phoneNumber" value={phoneNumber}/>
  <Button colorScheme='orange' variant='solid' onClick={handleSendOtp}>
    Send Code
  </Button>
    </div>

    </>
  )
}
