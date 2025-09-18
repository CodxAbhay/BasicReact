import { useState } from "react";

export default function FormControl() {
  let [name, setName] = useState("");

  let HandleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={name}
        onChange={HandleNameChange}
      />
      <br />
      <button>Submit</button>
    </div>
  );
}
// what if there are 20 types of input feild then how we will manage see in MultipleForm.jsx
