import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

const EntryForm = ({
  value,
  setValue,
  description,
  setDescription,
  setExpenses,
  expenses,
}) => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          width={12}
          icon={"tag"}
          label={"Description"}
          placeholder="Add description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></Form.Input>
        <Form.Input
          width={4}
          icon={"dollar"}
          label={"Value"}
          value={value}
          placeholder="100.00"
          onChange={e => setValue(e.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          checked={expenses}
          label={"Expense"}
          onChange={e => setExpenses(e.target.checked)}
        />
      </Segment>
    </Form>
  );
};

export default EntryForm;
