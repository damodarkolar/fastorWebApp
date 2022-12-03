import React from 'react'
import { Heading, HStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { PinInput, PinInputField } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAuthentication } from '../redux/Authentication/actions'







export const OtpEntryPage = () => {
    const dispatch=useDispatch()
const navigate=useNavigate();
const { auth }=useSelector((state)=>state);

const [otp, setOtp]=useState("");

const handleChange=(e)=>{
    const {name, value}=e.target
    setOtp(()=>(value))
    console.log(otp)
}



const handleVerify=()=>{
    dispatch(fetchUserAuthentication(auth.user_mobile, otp, "+91"))
    navigate("/home")
}


  return (
    <>
    <div width="500px">
    <Heading as='h2' size='xl'>
    OTP Verification
  </Heading>
  <Text fontSize='xl'>Enter the verification code we just sent on your Mobile Number </Text>
  {/* <HStack >
  <PinInput name="otp" value={otp} onChange={handleChange}>
    <PinInputField name="otp" value={otp} onChange={handleChange}/>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack> */}
<Input onChange={handleChange} placeholder='Enter Your Phone Number' size='lg' name="phoneNumber" value={otp}/>
  <Button colorScheme='orange' variant='solid' onClick={handleVerify}>
    Verify
  </Button>
  <Text fontSize='xl'>Didn't received code? Resend </Text>
    </div>

    </>
  )
}
