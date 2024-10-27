import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { PiUserCircleThin } from "react-icons/pi";
const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW={"80rem"} mx={"auto"} h={16} justify={"space-between"}>
        <Icon
          onClick={onOpen}
          as={HiMenu}
          cursor="pointer"
          fontSize="23px"
          display={{
            base: "block",
            lg: "none"
       
          }}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton as={Button}>
            {" "}
            <Icon fontSize="30px" as={PiUserCircleThin} />
          </MenuButton>

          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
