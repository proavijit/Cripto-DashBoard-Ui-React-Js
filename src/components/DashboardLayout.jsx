import { Box, calc, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          h="calc(100vh-80px)"
          overflowX="hidden"
          overflowY="auto"
          mt="6"
          maxW="80rem"
          px="4"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
