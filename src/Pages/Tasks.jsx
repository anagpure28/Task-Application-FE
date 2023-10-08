import React, { useEffect, useState } from "react";
import { url } from "../url";
import TaskCard from "../components/TaskCard";
import { Box, Heading, SkeletonText, useToast } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import "./Tasks.css";

export const Tasks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const skeleton = [1, 1, 1];
  const toast = useToast();

  // Getting the data
  const getAPI = () => {
    setLoading(true);
    fetch(`${url}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userAccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAPI();
  }, []);

  // Deleting the Task
  const HandleDelete = (_id) => {
    fetch(`${url}/tasks/delete/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userAccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast({
            title: data.msg,
            status: "success",
            position: "top",
            duration: 5000,
            isClosable: true,
          });
          getAPI();
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: err,
          status: "error",
          position: "top",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <div>
      <p className="Notes">Notes Taking Application</p>
      <p
        style={{
          margin: "20px auto 20px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        Your Tasks
      </p>
      <div style={{ margin: "auto", width: "80%" }}>
        {loading ? (
          <div className="grid">
            {skeleton.map((el, i) => {
              return (
                <Box key={i} padding="0" bg="white" borderRadius="5px">
                  <SkeletonText
                    mt="4"
                    noOfLines={1}
                    spacing="1"
                    skeletonHeight="52"
                  />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="3"
                    skeletonHeight="3"
                  />
                </Box>
              );
            })}
          </div>
        ) : !loading && data.length > 0 ? (
          <div className="grid">
            {data.length > 0 &&
              data?.map((el, i) => (
                <div key={i}>
                  <TaskCard {...el} ind={i} HandleDelete={HandleDelete} api={getAPI} />
                </div>
              ))}
          </div>
        ) : (
          <Box textAlign="center" py={35} px={6}>
            <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              Sorry No Tasks Found
            </Heading>
          </Box>
        )}
      </div>
    </div>
  );
};
