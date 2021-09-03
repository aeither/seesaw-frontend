import { VStack, Button, useToast, Text, Input } from "@chakra-ui/react";
import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";

import useNativeTokenBalance from "../hooks/useNativeTokenBalance";
import ClosePositionButton from "./ClosePositionButton";
import OpenPositionButton from "./OpenPositionButton";
import PositionCard from "./PositionCard";
import StateCard from "./StateCard";

function BottomPanel() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [amount, setAmount] = useState("0");
  const handleChange = (event) => setAmount(event.target.value);

  const { tokenBalance, isTokenBalanceLoading } = useNativeTokenBalance();

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

  return (
    <VStack w="100%" background="#141C33" px="4" py="2">
      <StateCard />
      {isTokenBalanceLoading ? (
        <Text>Loading contract balance...</Text>
      ) : (
        <Text>Contract Balance: {tokenBalance.data}</Text>
      )}
      <Input value={amount} onChange={handleChange} />
      <Button isLoading={loading} onClick={() => addMargin(amount)}>
        Add Margin
      </Button>
      <OpenPositionButton amount={amount} />
      <ClosePositionButton />
      <PositionCard />
    </VStack>
  );
}

export default BottomPanel;
