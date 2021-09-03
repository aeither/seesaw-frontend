import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  VStack,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import useStateInfo from "../hooks/useStateInfo";

import useAccountBalance from "../hooks/useAccountBalance";
import { atom, useAtom } from "jotai";
import OpenPositionButton from "./OpenPositionButton";

const collateralAtom = atom(10);
const leverageAtom = atom(2);
const outputAmountAtom = atom((get) => get(collateralAtom) * get(leverageAtom));

function AccountBalance() {
  const { ustBalance, ustBalanceLoading } = useAccountBalance();

  return (
    <HStack w="100%" justify="space-between" py="2">
      <Text fontSize="sm" fontWeight="bold">
        UST Balance
      </Text>
      {ustBalanceLoading ? (
        <Text>Loading balance...</Text>
      ) : (
        <Text>{ustBalance.data.coins.uusd}</Text>
      )}
    </HStack>
  );
}

function LeverageSlider() {
  const [leverage, setLeverage] = useAtom(leverageAtom);
  return (
    <>
      <Text fontSize="sm">LEVERAGE {leverage} X</Text>
      <Slider
        defaultValue={2}
        min={1}
        max={10}
        step={1}
        onChangeEnd={(val) => setLeverage(val)}
      >
        <SliderTrack>
          <SliderFilledTrack bg="brand.100" />
        </SliderTrack>
        <SliderThumb boxSize={4} />
      </Slider>
    </>
  );
}

function InputField() {
  const { stateInfo, isStateInfoLoading } = useStateInfo();
  const [collateral, setCollateral] = useAtom(collateralAtom);
  const [outputAmount] = useAtom(outputAmountAtom);

  const handleChange = (event) => setCollateral(event.target.value);

  return (
    <Box>
      <Box py="2">
        <Text mb="8px" fontSize="sm">
          COLLATERAL
        </Text>
        <NumberInput defaultValue={collateral} size="sm">
          <NumberInputField
            onChange={handleChange}
            // placeholder="0.0"
            // size="sm"
          />
          <InputRightElement width="4.5rem">
            <Text h="1.75rem" fontSize="sm">
              UST
            </Text>
          </InputRightElement>
        </NumberInput>
      </Box>
      <Box py="2">
        <Text mb="8px" fontSize="sm">
          AMOUNT: {outputAmount} UST
        </Text>
        <InputGroup size="md">
          {isStateInfoLoading ? (
            <Input
              value={0.0}
              onChange={handleChange}
              placeholder="0.0"
              size="sm"
            />
          ) : (
            <Input
              isReadOnly
              value={(
                outputAmount / parseInt(stateInfo.data.market_price)
              ).toFixed(5)}
              onChange={handleChange}
              placeholder="0.0"
              size="sm"
            />
          )}
          {/* <Input
            value={outputAmount}
            onChange={handleChange}
            placeholder="0.0"
            size="sm"
          /> */}
          <InputRightElement width="4.5rem">
            <Text h="1.75rem" fontSize="sm">
              LUNA
            </Text>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
}

// function SubmitOrder({ buttonType }) {
//   const buttonColor = buttonType == "buy" ? "#14C598" : "#F1463E";
//   const buttonText = buttonType == "buy" ? "BUY / LONG" : "SELL / SHORT";

//   return (
//     <Box pt="4">
//       <OpenPositionButton amount={amount} buttonType />
//     </Box>
//   );
// }

function BuySellTab() {
  const [collateral] = useAtom(collateralAtom);
  const [outputAmount] = useAtom(outputAmountAtom);

  return (
    <Tabs w="100%" isFitted>
      <TabList mb="1em">
        <Tab>Buy</Tab>
        <Tab>Sell</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <InputField />
          <LeverageSlider />
          <OpenPositionButton
            collateral={collateral}
            amount={outputAmount}
            buttonType="buy"
          />
        </TabPanel>
        <TabPanel>
          <InputField />
          <LeverageSlider />
          <OpenPositionButton
            collateral={collateral}
            amount={outputAmount}
            buttonType="buy"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function PositionsTable() {
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th>Symbol</Th>
          <Th>PNL</Th>
          <Th>Close</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>LUNA/UST</Td>
          <Td>+12$</Td>
          <Td>
            <Button size="sm">Close</Button>
          </Td>
        </Tr>
        <Tr>
          <Td>LUNA/UST</Td>
          <Td>+12$</Td>
          <Td>
            <Button size="sm">Close</Button>
          </Td>
        </Tr>
        <Tr>
          <Td>LUNA/UST</Td>
          <Td>+12$</Td>
          <Td>
            <Button size="sm">Close</Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

function HistoryTab() {
  return (
    <Tabs w="100%" isFitted>
      <TabList mb="1em">
        <Tab fontSize="sm">Positions</Tab>
        <Tab fontSize="sm">History</Tab>
        <Tab fontSize="sm">Funding</Tab>
      </TabList>
      <TabPanels>
        <TabPanel h="160px" overflowY="scroll">
          <PositionsTable />
        </TabPanel>
        <TabPanel h="160px" overflowY="scroll">
          <PositionsTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function TradingPanel() {
  return (
    <VStack w="400px" background="#141C33" px="4" py="2">
      <AccountBalance />
      <BuySellTab />
      <HistoryTab />
    </VStack>
  );
}

export default TradingPanel;
