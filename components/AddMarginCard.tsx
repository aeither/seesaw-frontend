import { useState, useEffect } from "react";
import { VStack, Button, useToast, Text, Input } from "@chakra-ui/react";
import axios, { AxiosRequestConfig } from "axios";

function AddMarginCard() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("0");
  const toast = useToast();

  const handleChange = (event) => setAmount(event.target.value);

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
    <>
      {" "}
      <Input value={amount} onChange={handleChange} />
      <Button isLoading={loading} onClick={() => addMargin(amount)}>
        Add Margin
      </Button>
    </>
  );
}

export default AddMarginCard;
