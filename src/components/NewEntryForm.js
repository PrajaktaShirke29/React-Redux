import React from "react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({
  description,
  setDescription,
  expenses,
  setExpenses,
  value,
  setValue,
  addNewData,
  cancelData,
}) => {
  return (
    <>
      <EntryForm
        description={description}
        setDescription={setDescription}
        expenses={expenses}
        setExpenses={setExpenses}
        value={value}
        setValue={setValue}
      />

      <ButtonSaveOrCancel add={addNewData} cancel={cancelData} />
    </>
  );
};

export default NewEntryForm;
