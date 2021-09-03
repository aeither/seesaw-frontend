import { VStack, Button, useToast, Text, Input } from "@chakra-ui/react";
import useSWR from "swr";
import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import useNativeTokenBalance from "../hooks/useNativeTokenBalance";
function BottomPanel() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [amount, setAmount] = useState("0");
  const handleChange = (event) => setAmount(event.target.value);

  const { tokenBalance, isLoading } = useNativeTokenBalance();

  function addMargin(amount: string) {
    if (amount == "0") {
      console.log(`Your amount is ${amount}, Set amount`);
      return;
    }
    setLoading(true);
    toast({
      title: `Submitting transaction...`,
      status: "info",
      isClosable: true,
    });

    axios
      .get(`/api/addMargin/?amount=${amount}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setLoading(false);
        toast({
          title: `Completed! hash: ${response.data}`,
          status: "success",
          isClosable: true,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function openPosition() {
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
          title: `Completed`,
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
    <VStack w="100%" background="#141C33" px="4" py="2">
      {isLoading ? (
        <Text>Loading contract balance...</Text>
      ) : (
        <Text>Contract Balance: {tokenBalance.data}</Text>
      )}
      <Input value={amount} onChange={handleChange} />
      <Button isLoading={loading} onClick={() => addMargin(amount)}>
        Add Margin
      </Button>
      <Button isLoading={loading} onClick={() => addMargin(amount)}>
        Open Position
      </Button>
    </VStack>
  );
}

export default BottomPanel;
