import {
  VStack,
  Button,
  useToast,
  Input,
  HStack,
  Tr,
  Td,
  Text,
} from "@chakra-ui/react";
import useActivePositionInfo from "../hooks/useActivePositionInfo";
import ClosePositionButton from "./ClosePositionButton";

function PositionCard() {
  const { positionInfo, positionInfoLoading } = useActivePositionInfo();

  return positionInfoLoading ? (
    <Text>Loading Position...</Text>
  ) : positionInfo.data.direction !== "n_o_t__s_e_t" ? (
    <Tr w="100%" justify="space-between">
      <Td>{positionInfo.data.current_value}</Td>
      <Td>{positionInfo.data.direction}</Td>
      <Td>{positionInfo.data.margin_left}</Td>
      <Td>{positionInfo.data.margin_ratio}</Td>
      <Td>{positionInfo.data.openingValue}</Td>
      <Td>{positionInfo.data.positionSize}</Td>
      <Td>{positionInfo.data.pnl}</Td>
      <Td>
        <ClosePositionButton />
      </Td>
    </Tr>
  ) : (
    <Text>No position</Text>
  );
}

export default PositionCard;
