import React, { useState } from "react";
import moment from "moment";

const BmiCalculator = () => {
  const [bmis, setBMIs] = useState([]);
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(170);

  const addBMI = () => {
    const bmi = calculateBmi({ weight, height });
    setBMIs([
      ...bmis,
      {
        weight: parseInt(weight),
        height: parseInt(height),
        bmi: bmi.toFixed(1),
        date: moment(),
        info: getBmiInfo({ bmi })
      }
    ]);
  };

  const removeBmi = date => {
    setBMIs([...bmis.filter(bmi => bmi.date !== date)]);
  };

  const getBmiInfo = ({ bmi }) => {
    if (bmi < 18.5) {
      return "You could use some more mass m8.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Perfect BMI :)))))";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "You're kinda fat but you can improve with a bit of exercise.";
    } else return "You better get your fat ass to our gym for some exercises.";
  };

  const calculateBmi = ({ weight, height }) =>
    weight / ((height / 100) * (height / 100));

  return (
    <div>
      <p>please write your height and then weight (cm and kg):</p>
      <input
        id="height"
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <p>remember now weight:</p>
      <input
        id="weight"
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      <button type="button" onClick={() => addBMI()}>
        Submit
      </button>
      <p id="BMI"></p>
      <TableBmi bmis={bmis} onRemove={date => removeBmi(date)} />
    </div>
  );
};

const TableBmi = ({ bmis, onRemove }) => {
  const [orderBy, setOrderBy] = useState(undefined);
  const [orderDirection, setOrderDirection] = useState(1);

  const changeOrder = newOrder => {
    if (orderBy === newOrder) {
      setOrderDirection(orderDirection * -1);
    } else setOrderBy(newOrder);
  };

  return (
    <table>
      <tr>
        <TableColumn
          styles={{ cursor: "pointer" }}
          onClick={() => changeOrder("weight")}
        >
          weight
        </TableColumn>
        <TableColumn
          styles={{ cursor: "pointer" }}
          onClick={() => changeOrder("height")}
        >
          height
        </TableColumn>
        <TableColumn
          styles={{ cursor: "pointer" }}
          onClick={() => changeOrder("bmi")}
        >
          bmi
        </TableColumn>
        <TableColumn
          styles={{ cursor: "pointer" }}
          onClick={() => changeOrder("date")}
        >
          date
        </TableColumn>
        <TableColumn>info</TableColumn>
      </tr>
      {bmis
        .sort((a, b) => orderDirection * (b[orderBy] - a[orderBy]))
        .map(({ weight, height, bmi, date, info }) => (
          <tr key={date}>
            <TableColumn>{weight}</TableColumn>
            <TableColumn>{height}</TableColumn>
            <TableColumn>{bmi}</TableColumn>
            <TableColumn>{date.format("YYYY-MM-DD hh:mm:ss")}</TableColumn>
            <TableColumn>{info}</TableColumn>
            <TableColumn
              styles={{ cursor: "pointer" }}
              onClick={() => onRemove(date)}
            >
              remove
            </TableColumn>
          </tr>
        ))}
    </table>
  );
};

const TableColumn = ({ children, onClick, styles }) => (
  <td
    onClick={onClick}
    style={{
      ...{
        width: "100px",
        padding: "15px",
        fontFamily: "verdana",
        fontSize: "12px",
        textAlign: "justify"
      },
      ...styles
    }}
  >
    {children}
  </td>
);

export default BmiCalculator;
