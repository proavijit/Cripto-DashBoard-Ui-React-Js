import {
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";
const SupportCard = () => {
  return (
    <Flex
      justifyContent="space-around"
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack spacing="3" maxW="380px">
        <Icon color="purple.500" fontSize="30" as={HiMail} />
        <Text as="h1" textStyle="h2" fontWeight="medium">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card p="6" borderRadius="1rem">
        <Text fontWeight="medium" mt={4} fontSize="sm" mb="25px">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack>
          <Stack spacing="6">
            <HStack
              flexDir={{
                base: "column",
                md: "row",
              }}
            >
              <FormControl w="full">
                <FormLabel>Name</FormLabel>
                <Input placeholder="James" />
              </FormControl>
              <FormControl>
                <FormLabel>SureName</FormLabel>
                <Input placeholder="Arthur" />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="name@mail.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea type="text" placeholder="Message" />
            </FormControl>
            <Checkbox defaultChecked>
              <HStack>
                <Text fontSize="sm">I agree with </Text>
                <Text fontSize="sm" color="purple.500">
                  Terms & Conditions
                </Text>
              </HStack>
            </Checkbox>
            <Stack>
              <Button>Send a Message</Button>
              <Button colorScheme="gray">Book a Meeting</Button>
            </Stack>
          </Stack>
        </HStack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
