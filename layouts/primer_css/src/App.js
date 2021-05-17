import { useState, useRef } from "react";
import { Absolute, Box, BorderBox, Button, Dialog } from '@primer/components'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState(false)
  const returnFocusRef = useRef(null)

  return (
    <Box>
      <BorderBox maxWidth={600} mx="auto" my={40} p={16} boxShadow="shadow.medium">
        <Button ref={returnFocusRef} onClick={() => {
          setIsOpen(true)
        }}>Open Modal</Button>
        <Dialog returnFocusRef={returnFocusRef} isOpen={isOpen} onDismiss={() => setIsOpen(false)} aria-labelledby="header-id">
          <Dialog.Header id="header-id">&nbsp;</Dialog.Header>
          <Box px={3} pt={3} pb={8}>
            <DatePicker
              selected={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </Box>
          <Absolute bottom={0} right={0} p={3}>
            <Button disabled={date === null} onClick={() => {
              window.alert(date.toISOString())
              setIsOpen(false)
            }}>Confirm</Button>
          </Absolute>
        </Dialog>
      </BorderBox>
    </Box>
  );
}
