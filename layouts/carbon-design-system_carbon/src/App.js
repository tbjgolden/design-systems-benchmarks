import { useState } from "react";
import {
  Button,
  Modal,
  Tile,
  DatePicker,
  DatePickerInput,
} from "carbon-components-react";
import "./App.scss";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(null);

  return (
    <div className="container">
      <Tile>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Modal
        </Button>
      </Tile>
      <Modal open={isOpen} onRequestClose={() => setIsOpen(false)} passiveModal>
        <DatePicker
          datePickerType="single"
          value={date}
          onChange={(date) => {
            console.log("Hi!!", date);
            if (Array.isArray(date) && date.length === 1) {
              setDate(date[0]);
            } else {
              setDate(null);
            }
          }}
        >
          <DatePickerInput id="a" placeholder="mm/dd/yyyy" />
        </DatePicker>

        <div className="bottom-row-wrapper">
          <div className="bottom-row">
            <Button
              disabled={date === null}
              onClick={() => {
                if (date !== null) {
                  window.alert(date.toISOString());
                  setIsOpen(false);
                }
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
