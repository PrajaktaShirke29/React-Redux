import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

const EditModal = ({
  open,
  cancel,
  editDetailChanges,
  description,
  setDescription,
  expenses,
  setExpenses,
  value,
  setValue,
  idx,
}) => {
  return (
    <Modal open={open}>
      <Modal.Header>Edit transactions</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          setDescription={setDescription}
          expenses={expenses}
          setExpenses={setExpenses}
          value={value}
          setValue={setValue}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={cancel}>Cancel</Button>
        <Button color={"blue"} onClick={() => editDetailChanges(idx)}>
          Edit
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditModal;
