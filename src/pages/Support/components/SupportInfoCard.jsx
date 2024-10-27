import { Box, Card, Flex, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";
import { CustomCard } from "../../../chakra/CustomCard";
const SupportInfoCard = ({ imgUrl, text, btnText, Invarted }) => {
  return (

      <Flex justifyContent="space-around"  alignItems="center" >
        <Box p="6" borderRadius="1rem">
          <Stack spacing="3" maxW="380px">
            <Icon color="purple.500" fontSize="30" as={HiMail} />
            <Text as="h1" textStyle="h2" fontWeight="medium">
              Contact Us
            </Text>
            <Text fontSize="sm" color="black.60">
              Have a question or just want to know more? Feel free to reach out
              to us.
            </Text>
          </Stack>
        </Box>

        <CustomCard
        
          height="full"
          bgImage={imgUrl}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgColor={Invarted ? "p.purple" : "white"}
        >
          <Tag
            color={Invarted ? "p.purple" : "white"}
            bgColor={Invarted ? "white" : "p.purple"}
            borderRadius="full"
          >
            {btnText}
          </Tag>
          <Text
            mt="4"
            fontWeight="medium"
            textStyle="h5"
            color={Invarted ? "white" : "black.80"}
          >
            {text}
          </Text>
        </CustomCard>
      </Flex>

  );
};

export default SupportInfoCard;
