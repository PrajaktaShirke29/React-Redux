import React from "react";
import { Statistic } from "semantic-ui-react";

const DisplayBalance = ({ size, color, label = "Budget", value = "00" }) => {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label>{label} </Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
};

export default DisplayBalance;
