import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

const EntryLine = ({
  data,
  color,
  setOpen,
  setEditDetail,
  deleteEntry,
  idx,
  setIndex,
}) => {
  return (
    <>
      <Segment color={color}>
        <Grid>
          <Grid.Row columns={data.length}>
            {data.map(res => (
              <Grid.Column width={res.width} textAlign={res.textAlign}>
                {res.title}
              </Grid.Column>
            ))}
            {/* <Grid.Column width={3} textAlign={"right"}>
              123.23
            </Grid.Column>*/}
            <Grid.Column width={3}>
              <Icon
                name={"edit"}
                onClick={() => {
                  setOpen(true);
                  setEditDetail(data);
                  setIndex(idx);
                }}
              />
              <Icon name={"trash"} onClick={() => deleteEntry(idx)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
