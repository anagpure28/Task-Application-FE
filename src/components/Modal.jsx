import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { url } from "../url";

export function ModalCard({ closePopup, api, selectedUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const ClosePopup = () => {
    onClose();
    closePopup();
  };

  // Getting the data
  useEffect(() => {
    if (selectedUser) {
      setTitle(selectedUser.title);
      setDescription(selectedUser.description);
    }
  }, [selectedUser]);

  useEffect(() => {
    onOpen();
  }, []);

  // Updating the Task
  const UpdateTask = () => {
    // const id = selectedUser._id;
    fetch(`${url}/tasks/update/${selectedUser._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userAccessToken")}`,
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data) {
          api();
          closePopup()
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err)
      });
  };

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={ClosePopup}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Update your Task</ModalHeader>
          <ModalCloseButton />

          <FormControl id="title" m={"auto"}>
            <FormLabel ml={5}>Title</FormLabel>
            <Input
              w={"90%"}
              ml={5}
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl id="description" mt={5}>
            <FormLabel ml={5}>Description</FormLabel>
            <Input
              ml={5}
              w={"90%"}
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <ModalFooter mt={2}>
            <Button mr={3} onClick={ClosePopup}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={UpdateTask}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
