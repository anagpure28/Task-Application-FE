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
import { url } from "../url";

export const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setdescriptionError] = useState(false);

  // Adding the Task
  const handleSubmit = () => {
    const payload = {
      title,
      description,
    };

    // Error handling
    {
      !title ? setTitleError(true) : setTitleError(false);
    }
    {
      !description ? setdescriptionError(true) : setdescriptionError(false);
    }

    if (!title || !description) {
      return false;
    }

    // Post request
    fetch(`${url}/tasks/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userAccessToken")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert(data.msg);
          setTitle("");
          setDescription("");
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <>
    <p className='Notes'>Notes Taking Application</p>
    <Flex
      minH={"90vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} mt={-32} py={5} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Add a Task</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          style={{ border: "1px solid gray" }}
        >
          <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {titleError ? (
                <Text style={{ color: "red", textAlign: "left" }}>
                  title is Required
                </Text>
              ) : null}
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {descriptionError ? (
                <Text style={{ color: "red", textAlign: "left" }}>
                  description is Required
                </Text>
              ) : null}
            </FormControl>
            <Stack spacing={6}>
              <Button
                onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                ADD TASK
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  );
};
