import {
  HStack,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack w="100%" px="4" pt="2" pb="8" justify="space-between">
      <HStack p="2">
        {/* <Image
          boxSize="35px"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        /> */}
        <Text fontWeight="bold">SeeSaw Perpetual</Text>
      </HStack>
      {/* <HStack>
        <NextLink href="/" passHref>
          <Text fontWeight="bold">DEX</Text>
        </NextLink>
      </HStack> */}
      <HStack spacing="2">
        <Menu>
          <MenuButton rounded="full" variant="outline" as={Button}>
            Network
          </MenuButton>
          <MenuList>
            <MenuItem>Columbus</MenuItem>
            <MenuItem>Tequila</MenuItem>
            <MenuItem>Bombay</MenuItem>
          </MenuList>
        </Menu>
        <Button onClick={onOpen} rounded="full" variant="outline">
          Wallet
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Connect</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
                ullamco deserunt aute id consequat veniam incididunt duis in
                sint irure nisi. Mollit officia cillum Lorem ullamco minim
                nostrud elit officia tempor esse quis.
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>
    </HStack>
  );
}

export default Navigation;
