import {
  VStack,
  Button,
  useToast,
  Text,
  Input,
  HStack,
} from "@chakra-ui/react";
import useActivePositionInfo from "../hooks/useActivePositionInfo";

function PositionCard() {
  const { positionInfo, positionInfoLoading } = useActivePositionInfo();

  return positionInfoLoading ? (
    <Text>Loading State Info...</Text>
  ) : positionInfo.data.direction !== "n_o_t__s_e_t" ? (
    <HStack w="100%" justify="space-between">
      <Text>Current Price: ${positionInfo.data.current_value}</Text>
      <Text>Direction: ${positionInfo.data.direction}</Text>
      <Text>Margin Left: ${positionInfo.data.margin_left}</Text>
      <Text>Margin Ratio: ${positionInfo.data.margin_ratio}</Text>
      <Text>Opening Value: ${positionInfo.data.openingValue}</Text>
      <Text>Position Size: ${positionInfo.data.positionSize}</Text>
      <Text>PNL: ${positionInfo.data.pnl}</Text>
    </HStack>
  ) : (
    <Text>No position</Text>
  );
}

export default PositionCard;
