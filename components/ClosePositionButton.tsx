import { VStack, Button, useToast, Text, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

function ClosePositionButton() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  function closePosition() {
    setLoading(true);
    toast({
      title: `Submitting transaction...`,
      status: "info",
      isClosable: true,
    });

    axios
      .get(`/api/closePosition/`, { timeout: 60000 })
      .then(function (response) {
        // handle success
        console.log(response);
        setLoading(false);
        toast({
          title: `Position Closed`,
          status: "success",
          isClosable: true,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false);
        toast({
          title: `closePosition Failed, Logs for more info`,
          status: "error",
          isClosable: true,
        });
      });
  }

  return (
    <Button size="sm" isLoading={loading} onClick={() => closePosition()}>
      Close
    </Button>
  );
}

export default ClosePositionButton;
