import { VStack, Button, useToast, Text, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

function OpenPositionButton({ amount }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  function openPosition(amount: string) {
    setLoading(true);
    toast({
      title: `Submitting transaction...`,
      status: "info",
      isClosable: true,
    });

    axios
      .get(`/api/openPosition/`)
      .then(function (response) {
        // handle success
        console.log(response);
        setLoading(false);
        toast({
          title: `Position Opened`,
          status: "success",
          isClosable: true,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <Button isLoading={loading} onClick={() => openPosition(amount)}>
      Open Position
    </Button>
  );
}

export default OpenPositionButton;
