import React from "react";
import EntryLine from "./EntryLine";

const EntryLines = ({
  entries,
  setEntries,
  setOpen,
  setEditDetail,
  deleteEntry,
  setIndex,
}) => {
  return entries.map((res, idx) => (
    <EntryLine
      key={idx}
      color={res[0].isExpense ? "red" : "green"}
      data={res}
      idx={idx}
      setEntries={setEntries}
      setOpen={setOpen}
      setEditDetail={setEditDetail}
      deleteEntry={deleteEntry}
      setIndex={setIndex}
    />
  ));
};

export default EntryLines;
