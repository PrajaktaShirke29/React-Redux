import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ add, cancel }) => {
  return (
    <Button.Group style={{ margin: 20 }}>
      <Button label={"Cancel"} onClick={() => cancel()} />
      <Button.Or />
      <Button color={"primary"} onClick={() => add()}>
        Add
      </Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
