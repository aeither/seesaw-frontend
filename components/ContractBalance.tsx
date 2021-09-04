import {
  VStack,
  Button,
  useToast,
  Text,
  Input,
  HStack,
} from "@chakra-ui/react";
import useStateInfo from "../hooks/useStateInfo";
import useNativeTokenBalance from "../hooks/useNativeTokenBalance";

function StateCard() {
  const { tokenBalance, isTokenBalanceLoading } = useNativeTokenBalance();

  return isTokenBalanceLoading ? (
    <Text>Loading Contract Balance Info...</Text>
  ) : (
    <VStack align="start">
      <Text>Contract Balance: {tokenBalance.data}</Text>
    </VStack>
  );
}

export default StateCard;
