import { useState } from "react";
import { Button, Card, DatePicker, Modal } from "antd";

import "./App.css";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(null);

  return (
    <div className="App">
      <Card>
        <Button
          type="primary"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Modal
        </Button>
      </Card>
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onCancel={() => {
          setIsOpen(false);
        }}
        footer={
          <>
            <Button
              type="primary"
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
          </>
        }
      >
        <DatePicker
          onChange={(date) => {
            setDate(date);
          }}
        />
      </Modal>
    </div>
  );
};
