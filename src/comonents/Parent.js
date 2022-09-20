import React from "react";
import Child from "./Child";
import logo from "../logo.png";

function Parent() {
  const user = {
    name: "Mohamed",
    email: "mohamed@gmail.com",
  };
  const names = ["amine", "mohamed", "taher"];
  const handleAlert = text => {
    alert(`Hello from ${text}`);
  };
  return (
    <div>
      <Child
        name='amine'
        age={50}
        user={user}
        names={names}
        handleAlert={handleAlert}
        isAdult={false}
      >
        <h5>Childen props</h5>
        <img src={logo} alt='logo' />
      </Child>
    </div>
  );
}

export default Parent;
