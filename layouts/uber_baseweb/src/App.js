import { styled } from "baseui";
import { StatefulInput } from "baseui/input";
import {
  Card,
  StyledAction
} from "baseui/card";
import { Button } from "baseui/button";
import { DatePicker } from "baseui/datepicker";
import { useState } from 'react'
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalButton,
} from "baseui/modal";

const Centered = styled("div", {
  maxWidth: '600px',
  margin: "40px auto"
});
const ModalBodyInner = styled("div", {
  paddingRight: "24px"
});

export const App = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [date, setDate] = useState(null)
  
  return (
    <div className="App">
      <Centered>
        <Card>
          <StyledAction>
            <Button onClick={() => {
              setIsOpen(true);
            }}>
              Open Modal
            </Button>
          </StyledAction>
        </Card>
        <Modal
          onClose={() => setIsOpen(false)}
          closeable
          isOpen={isOpen}
          animate
          autoFocus
        >
          <ModalBody>
            <ModalBodyInner>
              <DatePicker
                value={date}
                onChange={({ date }) => {
                  setDate(date)
                }}
              />
            </ModalBodyInner>
          </ModalBody>
          <ModalFooter>
            <ModalButton disabled={date === null} onClick={() => {
              if (date !== null) {
                window.alert(date.toISOString())
                setIsOpen(false)
              }
            }}>Submit</ModalButton>
          </ModalFooter>
        </Modal>
      </Centered>
    </div>
  );
};
