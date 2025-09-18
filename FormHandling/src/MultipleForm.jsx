import { useState } from "react";

export default function FormControl2() {
  let [formdata, setFormData] = useState({ name: "", username: "" });

  let HandleNameChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((CurrentObject) => {
      CurrentObject[fieldName] = newValue;
      // returning new onject to rerender the current changes
      return { ...CurrentObject };
    });
  };

  let prevent = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      username: "",
    });
  };

  return (
    <form onSubmit={prevent}>
      <label htmlFor="name">First Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formdata.name}
        onChange={HandleNameChange}
      />
      <label htmlFor="username">First Name:</label>

      <input
        type="text"
        name="username"
        id="username"
        value={formdata.username}
        onChange={HandleNameChange}
      />
      <br />
      <button>Submit</button>
    </form>
  );
}
