import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";
import { MdInfoOutline } from "react-icons/md";
const PortfolioSection = () => {
  return (
    <HStack
      align={{
        base: "flex-start",
        xl: "center",
      }}
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <HStack
        spacing={{
          base: "0",
          xl: "12",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={MdInfoOutline} />
          </HStack>
          <Text fontWeight="medium" textStyle="h2">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
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
                22.39401000
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack
              alignSelf={{
                base: "start",
                sm: "auto",
              }}
            >
              <Text fontWeight="medium" textStyle="h2">
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack
        spacing={{
          base: "4",
        }}
      >
        <Button leftIcon={<Icon as={LuArrowDownToLine} />}>Deposit</Button>
        <Button leftIcon={<Icon as={LuArrowUpToLine} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
