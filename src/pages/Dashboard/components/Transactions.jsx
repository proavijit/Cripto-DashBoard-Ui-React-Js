import { Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { RiBtcFill } from "react-icons/ri";
import { Fragment } from "react/jsx-runtime";
import { CustomCard } from "../../../chakra/CustomCard";
const Transactions = () => {
  const transactionsData = [
    {
      id: 1,
      icon: BiSolidDollarCircle,
      text: "INR Deposit",
      amount: "+₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: 2,
      icon: RiBtcFill,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: 3,
      icon: BiSolidDollarCircle,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard>
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={3}>
        {transactionsData.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider  />}
            <Flex gap={4} >
              <Grid
                placeItems="center"
                boxSize={10}
                bg="black.5"
                borderRadius="full"
              >
                <Icon fontSize="21px" as={transaction.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text fontWeight="medium" textStyle="h6">
                    {transaction.text}
                  </Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text fontWeight="medium" textStyle="h6">
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt="1">View All</Button>
    </CustomCard>
  );
};

export default Transactions;
