import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";
import DashboardLayout from "../../components/DashboardLayout";
import TransactionTable from "./components/TransactionTable";
import { IoSearchOutline } from "react-icons/io5";
const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 349,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mb="3">
        <Button leftIcon={<Icon as={LuDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Flex key={tab.count}>
                  <Tab display="flex" gap="2">
                    {tab.name}
                    <Tag borderRadius="full" colorScheme="gray" back>
                      {tab.count}
                    </Tag>
                  </Tab>
                </Flex>
              ))}
            </HStack>

            <InputGroup maxW="300px" pr={6}>
              <InputLeftElement pointerEvents="none">
                <Icon as={IoSearchOutline} color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or destination" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>Four!</p>
              <h2>
                When Calling Real API Table Works Dinamically & Properly 😊
              </h2>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
