import React from "react";
import BmiCalculator from "./BmiCalculator";
import GymStatus from "./GymStatus";

const Dashboard = () => {
  return (
    <div>
      <table style={{ "padding-left": "50px", "font-size": "12px" }}>
        <tr>
          <MenuDropdown />
          <td
            style={{
              "padding-left": "50px",
              "font-family": "verdana",
              "font-size": "12px",
              "text-align": "justify"
            }}
          >
            <GymStatus />
            <BmiCalculator />
          </td>
          <td>
            <BackgroundInput />
            <FactorialForm />
          </td>
        </tr>
      </table>
    </div>
  );
};

const FactorialForm = () => {
  const changeHeader = () => {
    return undefined;
  };
  const factorialCalc = () => {
    return undefined;
  };
  return (
    <form
      style={{ float: "left" }}
      name="fact"
      action="#"
      onsubmit={() => changeHeader(factorialCalc())}
    >
      <p>Calculate a factorial lol</p>
      <input id="number" type="number" value={0} />
      <input type="submit" value="Calculate" />
    </form>
  );
};

const MenuDropdown = () => {
  return (
    <td style={{ position: "absolute", top: "180px", left: "20px" }}>
      <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
          <a href="gallery.html">Gallery</a>
          <br />
          <a href="register.html">Register</a>
          <br />
          <a href="staff.html">Our staff</a>
          <br />
          <a href="pricing.html">Pricing</a>
          <br />
          <a href="contact.html">Contact</a>
          <br />
        </div>
      </div>
    </td>
  );
};

const BackgroundInput = () => (
  <div style={{ float: "right", "padding-left": "400px" }}>
    <p>
      Choose background gradient color 1:{" "}
      <input class="jscolor {onFineChange:'updatebg1(this)'}" value="FF69B4" />
    </p>
    <p>
      Choose background gradient color 2:{" "}
      <input class="jscolor {onFineChange:'updatebg2(this)'}" value="00FFFF" />
    </p>
  </div>
);

export default Dashboard;
