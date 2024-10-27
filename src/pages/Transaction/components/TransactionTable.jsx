

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

const TransactionTable = () => {
const tableData = [
  {
    id: "HD82NA2H",
    date: "2024-06-09",
    time: "07.00 AM",
    type: {
      name: "INR Deposit",
      tag: "E-Transfer",
    },
    amount: "+ ₹81,123.10",
    status: "Pending",
  },
  {
    id: "HD82NA2H",
    date: "2024-06-07",
    time: "07.00 AM",
    type: {
      name: "INR Withdraw",
      tag: "Wire Transfer",
    },
    amount: "- ₹81,123.10",
    status: "Processing",
  },
  {
    id: "AB47KC3J",
    date: "2024-06-05",
    time: "02.30 PM",
    type: {
      name: "INR Deposit",
      tag: "",
    },
    amount: "+ ₹50,000.00",
    status: "Completed",
  },
  {
    id: "JK56PL8Q",
    date: "2024-06-04",
    time: "11.15 AM",
    type: {
      name: "INR Withdraw",
      tag: "E-Transfer",
    },
    amount: "- ₹30,250.00",
    status: "Failed",
  },
  {
    id: "LM23QS9R",
    date: "2024-06-03",
    time: "09.00 AM",
    type: {
      name: "INR Deposit",
      tag: "Wire Transfer",
    },
    amount: "+ ₹120,000.00",
    status: "Completed",
  },
  {
    id: "XY89TR5W",
    date: "2024-06-01",
    time: "04.45 PM",
    type: {
      name: "INR Withdraw",
      tag: "",
    },
    amount: "- ₹45,500.00",
    status: "Pending",
  },
];

const statusColor = {
  Pending: "#797E82",
  Processing: "#F5A50B",
  Completed: "#059669",
  Failed: "#DC2626",
};

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="lg" fontWeight="medium">
                {data.id}
              </Td>
              <Td>
                <Flex flexDir="column">
                  <Text fontSize="md" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text>
                </Flex>
              </Td>
              <Td>
                <Flex flexDir="column">
                  <Text fontSize="md" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.type?.tag}
                  </Text>
                </Flex>
              </Td>
              <Td fontSize="md" fontWeight="medium">
                {data.amount}
              </Td>
              <Td fontSize="xs" fontWeight="medium" textAlign="center">
                <Text
                  bg={statusColor[data.status]}
                  display="inline-block"
                  color="white"
                  borderRadius="full"
                  py="1px"
                  px="2"
                >
                  {data.status}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable