import { useState } from "react";
import { Button, Pane, Dialog } from "evergreen-ui";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [date, setDate] = useState(null);

  return (
    <div className="App">
      <style>{`html, body { margin: 0; }`}</style>

      <Pane
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={16}
      >
        <Pane elevation={1} width={600} maxWidth="100%" padding={16}>
          <Button
            onClick={() => {
              setIsShown(true);
            }}
          >
            Open Model
          </Button>
          <Dialog
            isShown={isShown}
            title="Dialog title"
            onCloseComplete={() => {
              setIsShown(false);
            }}
            hasFooter={false}
            confirmLabel="Custom Label"
          >
            <Pane>
              <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
              />
            </Pane>
            <Pane marginTop={16}>
              <Button
                disabled={date === null}
                onClick={() => {
                  if (date !== null) {
                    window.alert(date.toISOString());
                    setIsShown(false);
                  }
                }}
              >
                Submit
              </Button>
            </Pane>
          </Dialog>
        </Pane>
      </Pane>
    </div>
  );
};
