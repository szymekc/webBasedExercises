import React from "react";
import BmiCalculator from "./BmiCalculator";
import GymStatus from "./GymStatus";

const Dashboard = () => {
  return (
    <div>
      <div>
        <MenuDropdown />
        <div
          style={{
            paddingLeft: "50px",
            fontFamily: "verdana",
            fontSize: "12px",
            textAlign: "justify"
          }}
        >
          <GymStatus />
          <BmiCalculator />
        </div>
        <div>
          <BackgroundInput />
          <FactorialForm />
        </div>
      </div>
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
      onSubmit={() => changeHeader(factorialCalc())}
    >
      <p>Calculate a factorial lol</p>
      <input id="number" type="number" value={0} />
      <input type="submit" value="Calculate" />
    </form>
  );
};

const MenuDropdown = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        top: "180px",
        left: "20px"
      }}
    >
      <div style={{ marginRight: "auto" }} className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
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
    </div>
  );
};

const BackgroundInput = () => (
  <div style={{ float: "right", paddingLeft: "400px" }}>
    <p>
      Choose background gradient color 1:{" "}
      <input
        className="jscolor {onFineChange:'updatebg1(this)'}"
        value="FF69B4"
      />
    </p>
    <p>
      Choose background gradient color 2:{" "}
      <input
        className="jscolor {onFineChange:'updatebg2(this)'}"
        value="00FFFF"
      />
    </p>
  </div>
);

export default Dashboard;
