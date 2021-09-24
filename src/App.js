import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your budget: </Statistic.Label>
        <Statistic.Value>1000.50</Statistic.Value>
      </Statistic>
      <Segment textAlign={"center"}>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color={"green"}>
                <Statistic.Label>Incoming: </Statistic.Label>
                <Statistic.Value>2000.10</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color={"red"}>
                <Statistic.Label>Expenses: </Statistic.Label>
                <Statistic.Value>1968.32</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color={"red"}>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={10} textAlign={"left"}>
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign={"right"}>
              123.23
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name={"edit"} />
              <Icon name={"trash"} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color={"green"}>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={10} textAlign={"left"}>
              Something else
            </Grid.Column>
            <Grid.Column width={3} textAlign={"right"}>
              10.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name={"edit"} />
              <Icon name={"trash"} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color={"red"}>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={10} textAlign={"left"}>
              Something big else
            </Grid.Column>
            <Grid.Column width={3} textAlign={"right"}>
              100.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name={"edit"} />
              <Icon name={"trash"} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">Add transactions</Header>
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
      <Button.Group style={{ marginTop: 20 }}>
        <Button label={"Cancel"} />
        <Button.Or />
        <Button color={"primary"}>Add</Button>
      </Button.Group>
    </Container>
  );
}

export default App;
