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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { terra, mainWallet } from "../utils/terra";
import { walletAddr } from "../utils/constants";
import { GetStaticProps } from "next";
import axios from "axios";

function AccountBalance() {
  const [ustBalance, setUstBalance] = useState(0.00);
  useEffect(() => {
    axios
      .get(`/api/getAccountBalance`)
      .then(function (response) {
        // handle success
        console.log("getAccountBalance", response);
        setUstBalance(response.data.coins.uusd)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <HStack w="100%" justify="space-between" py="2">
      <Text fontSize="sm" fontWeight="bold">
        UST Balance
      </Text>
      <Text fontSize="sm">{ustBalance}$</Text>
    </HStack>
  );
}

function LeverageSlider() {
  const [lvl, setLvl] = useState(2);
  return (
    <>
      <Text fontSize="sm">LEVERAGE {lvl} X</Text>
      <Slider
        defaultValue={2}
        min={1}
        max={10}
        step={1}
        onChangeEnd={(val) => setLvl(val)}
      >
        <SliderTrack>
          <SliderFilledTrack bg="brand.100" />
        </SliderTrack>
        <SliderThumb boxSize={4} />
      </Slider>
    </>
  );
}

function InputField({ title, currency }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Box py="2">
      <Text mb="8px" fontSize="sm">
        {title}: {value}
      </Text>
      <InputGroup size="md">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="0.0"
          size="sm"
        />
        <InputRightElement width="4.5rem">
          <Text h="1.75rem" fontSize="sm">
            {currency}
          </Text>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}

function SubmitOrder({ buttonType }) {
  const buttonColor = buttonType == "buy" ? "#14C598" : "#F1463E";
  const buttonText = buttonType == "buy" ? "BUY / LONG" : "SELL / SHORT";
  return (
    <Box pt="4">
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
      >
        {buttonText}
      </Button>
    </Box>
  );
}

function BuySellTab() {
  return (
    <Tabs w="100%" isFitted>
      <TabList mb="1em">
        <Tab>Buy</Tab>
        <Tab>Sell</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <InputField title="AMOUNT" currency="LUNA" />
          <InputField title="COLLATERAL" currency="UST" />
          <LeverageSlider />
          <SubmitOrder buttonType="buy" />
        </TabPanel>
        <TabPanel>
          <InputField title="AMOUNT" currency="LUNA" />
          <InputField title="COLLATERAL" currency="UST" />
          <LeverageSlider />
          <SubmitOrder buttonType="sell" />
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

function TradingPanel({ accountInfo }) {
  console.log("accountInfo", accountInfo);
  return (
    <VStack w="400px" background="#141C33" px="4" py="2">
      <AccountBalance />
      <BuySellTab />
      <HistoryTab />
      {/* {accountInfo.length > 0 ? accountInfo.coins.uusd : 0.0} */}
    </VStack>
  );
}

export default TradingPanel;
