import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = () => {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button label={"Cancel"} />
      <Button.Or />
      <Button color={"primary"}>Add</Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
