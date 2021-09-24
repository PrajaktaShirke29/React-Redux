import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  const entryData = [
    [
      { width: 10, title: "SomeThing", textAlign: "left" },
      { width: 3, title: "123.23", textAlign: "right" },
    ],
    [
      { width: 10, title: "SomeThing else", textAlign: "left" },
      { width: 3, title: "100.23", textAlign: "right" },
    ],
    [
      { width: 10, title: "SomeThing else ones ageain", textAlign: "left" },
      { width: 3, title: "10.00", textAlign: "right" },
    ],
  ];

  return (
    <Container>
      <MainHeader title={"Budget"} />
      <DisplayBalance size="small" label={"Your budget:"} value={"1010.23"} />
      <DisplayBalances />

      <MainHeader title={"History"} type={"h3"} />

      {entryData.map((res, idx) => (
        <EntryLine color={idx % 2 ? "green" : "red"} data={res} />
      ))}
      <MainHeader title={"Add transactions"} type={"h3"} />

      <NewEntryForm />
    </Container>
  );
}

export default App;
