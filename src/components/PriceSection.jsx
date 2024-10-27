import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { MdInfoOutline } from "react-icons/md";
import { CustomCard } from "../chakra/CustomCard";
const PriceSection = () => {
  const timeStamp = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <HStack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Prices</Text>
            <Icon as={MdInfoOutline} />
          </HStack>
          <HStack
            spacing="4"
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text fontWeight="medium" textStyle="h2">
                ₹26,670.25
              </Text>
            </HStack>
            <HStack
              alignSelf={{
                base: "start",
                sm: "auto",
              }}
            >
              <HStack>
                <Icon as={GoArrowUpRight} />
                <Text fontSize="16px" color="#059669" fontWeight="medium">
                  0.04%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </HStack>

        <HStack
          spacing={{
            base: "4",
          }}
        >
          <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" >
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
              _selected={{background:"white"}}
               fontSize="sm" borderRadius="4px" p="6px">
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/public/Graph.svg" color="purple.500" />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <HStack justify="space-between">
        {timeStamp.map((time) => (
          <Text fontSize="sm" color="black.80" key={time}>
            {time}
          </Text>
        ))}
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
