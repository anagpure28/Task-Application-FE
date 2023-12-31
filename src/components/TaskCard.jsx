import {
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { ModalCard } from "./Modal";

function TaskCard({ _id, title, description, HandleDelete, ind, api }) {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [SelectedUser, setSelectedUser] = useState(undefined);

  // Update the id
  const Update = (_id, title, description) => {
    setIsUpdateOpen(true);
    setSelectedUser({_id, title, description});
  };

  // Delete the id
  const Delete = () => {
    HandleDelete(_id)
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="xl"
      border={"1px solid black"}
      height={365}
    >
      <Box
        p={3}
        bg={"white"}
        fontWeight={"bold"}
        fontSize={22}
        letterSpacing={1}
        style={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      >
        TASK - {ind + 1}
      </Box>
      <Box>
        <Text
          m={2}
          fontSize={18}
          letterSpacing={2}
          fontFamily={"serif"}
          fontWeight={600}
        >
          Title
        </Text>
        <Scrollbars
          style={{
            width: "90%",
            height: "45px",
            border: "1px solid gray",
            margin: "auto",
            borderRadius: "5px",
          }}
        >
          <div>
            <Text pt={2} px={8} fontSize={17}>
              {title}
            </Text>
          </div>
        </Scrollbars>
        <Text
          m={2}
          fontSize={18}
          letterSpacing={2}
          fontFamily={"serif"}
          fontWeight={600}
        >
          Description
        </Text>
        <Scrollbars
          style={{
            width: "90%",
            height: "100px",
            border: "1px solid gray",
            margin: "auto",
            borderRadius: "5px",
          }}
        >
          <div>
            <Text pt={3} px={8} fontSize={17}>
              {description}
            </Text>
          </div>
        </Scrollbars>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            marginTop: "25px",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            padding: "5px",
          }}
        >
          <Button onClick={()=> Update(_id, title, description)}>
            Update
          </Button>
          <Button onClick={Delete}>Delete</Button>
        </Box>
      </Box>
      
      {/* Showing Modal */}
      {isUpdateOpen && <ModalCard closePopup={()=> setIsUpdateOpen(!isUpdateOpen)} selectedUser={SelectedUser} api={api} />}
    </Box>
  );
}

  export default TaskCard;