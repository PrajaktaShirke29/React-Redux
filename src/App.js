import { get } from "lodash";
import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EditModal from "./components/EditModal";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

const historyData = [
  [
    { width: 10, title: "SomeThing", textAlign: "left", isExpense: true },
    { width: 3, title: "123.23", textAlign: "right" },
  ],
  [
    { width: 10, title: "SomeThing else", textAlign: "left", isExpense: false },
    { width: 3, title: "100.23", textAlign: "right" },
  ],
  [
    {
      width: 10,
      title: "SomeThing else ones ageain",
      textAlign: "left",
      isExpense: true,
    },
    { width: 3, title: "10.00", textAlign: "right" },
  ],
  [
    { width: 10, title: "alpha", textAlign: "left", isExpense: false },
    { width: 3, title: "123.23", textAlign: "right" },
  ],
  [
    { width: 10, title: "beta else", textAlign: "left", isExpense: true },
    { width: 3, title: "100.23", textAlign: "right" },
  ],
  [
    {
      width: 10,
      title: "gamma else ones ageain",
      textAlign: "left",
      isExpense: false,
    },
    { width: 3, title: "10.00", textAlign: "right" },
  ],
];

function App() {
  const [entries, setEntries] = useState(historyData);
  const [open, setOpen] = useState(false);
  const [editDetail, setEditDetail] = useState([]);
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState(true);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState("");
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let expense = 0;
    let income = 0;
    entries.map(res => {
      if (res[0].isExpense) {
        return (expense += +res[1].title);
      }
      return (income += +res[1].title);
    });
    setTotalBudget(parseInt(income - expense));
    setTotalExpense(parseInt(expense));
    setTotalIncome(parseInt(income));
  }, [editDetail]);
  const deleteEntry = idx => {
    setEntries(res => res.filter((result, indexes) => indexes !== idx));
  };
  const editDetailChanges = idx => {
    const data = [
      {
        width: 10,
        title: description,
        textAlign: "left",
        isExpense: expenses,
      },
      { width: 3, title: value, textAlign: "right" },
    ];
    setEditDetail(data);
    editEntry(data, idx);
  };
  useEffect(() => {
    if (index) {
      setExpenses(get(editDetail, "0.isExpense", false));
      setDescription(get(editDetail, "0.title", ""));
      setValue(get(editDetail, "1.title", ""));
    }
  }, [editDetail]);
  const addNewData = () => {
    setEntries(res => [
      ...res,
      [
        {
          width: 10,
          title: description,
          textAlign: "left",
          isExpense: expenses,
        },
        { width: 3, title: value, textAlign: "right" },
      ],
    ]);
    cancelData();
  };
  const cancelData = () => {
    setDescription("");
    setValue("");
    setExpenses(true);
    setIndex("");
  };
  const editEntry = (entry, idx) => {
    setEntries(res =>
      res.map((result, indexes) => {
        if (indexes === idx) {
          return entry;
        }
        return result;
      })
    );
    cancel();
  };
  const cancel = () => {
    setOpen(false);
    cancelData();
  };
  return (
    <>
      <Container>
        <MainHeader title={"Budget"} />
        <DisplayBalance
          size="small"
          label={"Your budget:"}
          value={totalBudget}
        />
        <DisplayBalances
          totalExpense={totalExpense}
          totalIncome={totalIncome}
        />

        <MainHeader title={"History"} type={"h3"} />
        <EntryLines
          entries={entries}
          setEntries={setEntries}
          setOpen={setOpen}
          setEditDetail={setEditDetail}
          deleteEntry={deleteEntry}
          setIndex={setIndex}
        />
        <MainHeader title={"Add transactions"} type={"h3"} />

        <NewEntryForm
          description={description}
          setDescription={setDescription}
          expenses={expenses}
          setExpenses={setExpenses}
          value={value}
          setValue={setValue}
          addNewData={addNewData}
          cancelData={cancel}
        />
      </Container>
      <EditModal
        open={open}
        setOpen={setOpen}
        editDetail={editDetail}
        setEditDetail={setEditDetail}
        editEntry={editEntry}
        editDetailChanges={editDetailChanges}
        description={description}
        setDescription={setDescription}
        expenses={expenses}
        setExpenses={setExpenses}
        value={value}
        setValue={setValue}
        cancel={cancel}
        idx={index}
      />
    </>
  );
}

export default App;
