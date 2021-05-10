import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss"

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [date, setDate] = useState(null);

  return (
    <Container maxW="600" style={{ margin: "0 auto" }}>
      <Box bg="white" p={4} color="black" boxShadow="base" mt="10">
        <Button colorScheme="blue" onClick={onOpen}>Open Modal</Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="none">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt="4" mr="10">
            <Box>
              <DatePicker selected={date} onChange={date => setDate(date)} />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => {
              if (date !== null) {
                window.alert(date.toISOString())
                onClose()
              }
            }} disabled={date === null}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
