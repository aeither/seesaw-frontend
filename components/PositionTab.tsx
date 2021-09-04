import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";
import PositionCard from "./PositionCard";

function PositionsTable() {
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th>Current Price</Th>
          <Th>Direction</Th>
          <Th>Margin</Th>
          <Th>M. Ratio</Th>
          <Th>Entry Price</Th>
          <Th>Size</Th>
          <Th>PNL</Th>
          <Th>Funding</Th>
          <Th>Close</Th>
        </Tr>
      </Thead>
      <Tbody>
        <PositionCard />
      </Tbody>
    </Table>
  );
}

function HistoryTable() {
  return (
    <Table size="sm">
      <Thead>
        <Tr>
          <Th>Direction</Th>
          <Th>Price</Th>
          <Th>Size</Th>
          <Th>PNL</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr w="100%" justify="space-between">
          <Td>SELL</Td>
          <Td>34</Td>
          <Td>8</Td>
          <Td>200uusd</Td>
        </Tr>
        <Tr w="100%" justify="space-between">
          <Td>SELL</Td>
          <Td>31</Td>
          <Td>2</Td>
          <Td>30uusd</Td>
        </Tr>
        <Tr w="100%" justify="space-between">
          <Td>BUY</Td>
          <Td>17</Td>
          <Td>10</Td>
          <Td>0uusd</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

function PositionTab() {
  return (
    <Tabs w="100%" isFitted>
      <TabList mb="1em">
        <Tab fontSize="sm">Positions</Tab>
        <Tab fontSize="sm">History</Tab>
        {/* <Tab fontSize="sm">Funding</Tab> */}
      </TabList>
      <TabPanels>
        <TabPanel h="160px" overflowY="scroll">
          <PositionsTable />
        </TabPanel>
        <TabPanel h="160px" overflowY="scroll">
          <HistoryTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default PositionTab;
