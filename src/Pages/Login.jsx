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
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../url";

const Login = () => {
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPasword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const payload = { email, password };

    { !email ? setEmailError(true) : setEmailError(false)}
    { !password ? setPasswordError(true) : setPasswordError(false)}

    if(!email || !password){
        return false
    }

    fetch(`${url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(email !== data.email){
          alert(data.msg)
        }else if(password !== data.password){
          alert(data.msg)
        }else if (data.token) {
          localStorage.setItem("userToken", data.token);
          alert(data.msg);
          navigate("/create");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} mt={-20} py={5} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login Form</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
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
            <Stack spacing={10}>
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
                Login
              </Button>
            </Stack>
          </Stack>
          <p>
            Not a member? <Link to={"/register"}>Register</Link>
          </p>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
