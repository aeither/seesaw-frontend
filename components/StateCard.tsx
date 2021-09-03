import {
  VStack,
  Button,
  useToast,
  Text,
  Input,
  HStack,
} from "@chakra-ui/react";
import useStateInfo from "../hooks/useStateInfo";

function StateCard() {
  const { stateInfo, isStateInfoLoading } = useStateInfo();

  return isStateInfoLoading ? (
    <Text>Loading State Info...</Text>
  ) : (
    <VStack>
      <Text>
        Funding:{" "}
        {stateInfo.data.funding_fee.who_pays == "l_o_n_g"
          ? "Longs pay shorts"
          : "Shorts pay longs"}
      </Text>
      <Text>Asset Price: ${stateInfo.data.underlying_price}</Text>
      <Text>Market Price: ${stateInfo.data.market_price}</Text>
    </VStack>
  );
}

export default StateCard;
