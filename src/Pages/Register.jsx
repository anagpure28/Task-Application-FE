import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../url";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPasword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const payload = { name, email, password };

    { !name ? setNameError(true) : setNameError(false)}
    { !email ? setEmailError(true) : setEmailError(false)}
    { !password ? setPasswordError(true) : setPasswordError(false)}
    { !confirmPassword ? setConfirmPasswordError(true) : setConfirmPasswordError(false)}

    if( !name || !email || !password || !confirmPassword ){
        return false
    }

    if (password == confirmPassword) {
      fetch(`${url}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.msg === "User already exists") {
            alert(data.msg);
            return;
          } else {
            alert(data.msg);
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Password not Matching");
      return;
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign up Form</Heading>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            {/* <Button style={{border: "px solid black"}} onClick={handleLogin}>Login</Button> */}
            {/* <Button scaleYtyle={{border: "px solid black"}} onClick={handleSignup}>Signup</Button> */}
          </Box>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError ? <Text style={{color: 'red', textAlign: 'left'}}>Name is Required</Text> : null}
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              {emailError ? <Text style={{color: 'red', textAlign: 'left'}}>Email is Required</Text> : null}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setLoginPasword(e.target.value)}
              />
              {passwordError ? <Text style={{color: 'red', textAlign: 'left'}}>Password is Required</Text> : null}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {confirmPasswordError ? <Text style={{color: 'red', textAlign: 'left'}}>ConfirmPassword is Required</Text> : null}
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;