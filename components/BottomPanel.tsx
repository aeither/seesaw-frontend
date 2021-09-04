import { VStack } from "@chakra-ui/react";

import PositionTab from "./PositionTab";

function BottomPanel() {
  return (
    <VStack w="100%" background="#141C33" px="4" py="2">
      <PositionTab />
    </VStack>
  );
}

export default BottomPanel;
