import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

const NewEntryForm = () => {
  return (
    <>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            width={12}
            icon={"tag"}
            label={"Description"}
            placeholder="Add description"
          ></Form.Input>
          <Form.Input
            width={4}
            icon={"dollar"}
            label={"Value"}
            placeholder="100.00"
          ></Form.Input>
        </Form.Group>
      </Form>
      <ButtonSaveOrCancel />
    </>
  );
};

export default NewEntryForm;
