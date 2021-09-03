import { VStack, Button, useToast, Text, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

function OpenPositionButton({ collateral, amount, buttonType }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const buttonColor = buttonType == "buy" ? "#14C598" : "#F1463E";
  const buttonText = buttonType == "buy" ? "BUY / LONG" : "SELL / SHORT";

  async function addMargin(amount: string) {
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

    await axios
      .get(`/api/addMargin/?amount=${amount}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setLoading(false);
        toast({
          title: `Margin added! hash: ${response.data}`,
          status: "success",
          isClosable: true,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  async function openPosition(amount: string) {
    setLoading(true);
    toast({
      title: `Submitting transaction...`,
      status: "info",
      isClosable: true,
    });

    await axios
      .get(`/api/openPosition/?amount=${amount}`)
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
    <Button
      display="block"
      w="100%"
      background={buttonColor}
      _hover={{ filter: "brightness(85%)" }}
      _active={{
        bg: buttonColor,
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      isLoading={loading}
      onClick={async () => {
        await addMargin(collateral);
        await openPosition(amount);
      }}
    >
      Open Position
    </Button>
  );
}

export default OpenPositionButton;
