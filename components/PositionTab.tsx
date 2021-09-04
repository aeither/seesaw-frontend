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
          <Th>Close</Th>
        </Tr>
      </Thead>
      <Tbody>
        <PositionCard />
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
        <Tab fontSize="sm">Funding</Tab>
      </TabList>
      <TabPanels>
        <TabPanel h="160px" overflowY="scroll">
          <PositionsTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default PositionTab;
