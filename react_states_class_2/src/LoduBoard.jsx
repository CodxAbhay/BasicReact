import { useState } from "react";

export default function LoduBoard() {
  // using objects to use useState for multiple objects
  let [moves, setmoves] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });

  // now using arrays as a state variable

  function moves1() {
    // to use the setmoves in the object we have to spread the obejctname so( use ...objectName)
    // [we use this because we want to send a new copy to setmoves function so that it can dedect the change then render the page  ]

    setmoves((preMoves) => {
      return { ...preMoves, blue: preMoves.blue + 1 };
    });
  }
  function moves2() {
    setmoves((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });
  }
  function moves3() {
    setmoves((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });
  }
  function moves4() {
    setmoves((preMoves) => {
      return { ...preMoves, red: preMoves.red + 1 };
    });
  }

  // this is one and only one function for all the button we don't need tp create seprate function for each
  // [this will increse the count of all the button by clicking one ]
  function OneFunction(event) {
    let name = event.target.name;
    let value = Number(moves[name]); //     let value = Number(moves[name]); // Get the current value properly
    setmoves((premoves) => {
      return { ...premoves, [name]: value + 1 };
    });
  }
  return (
    <div className="LoduBoard">
      <p>Game Begines !!</p>
      <div>
        <p>Blue Moves = {moves.blue} </p>
        <button
          onClick={OneFunction}
          style={{ backgroundColor: "blue" }}
          name="blue"
        >
          +1
        </button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button
          onClick={OneFunction}
          style={{ backgroundColor: "yellow" }}
          name="yellow"
        >
          +1
        </button>
        <p>Green Moves = {moves.green} </p>
        <button
          onClick={OneFunction}
          style={{ backgroundColor: "green" }}
          name="green"
        >
          +1
        </button>
        <p>Red Moves = {moves.red} </p>
        <button
          onClick={OneFunction}
          style={{ backgroundColor: "red" }}
          name="red"
        >
          +1
        </button>
      </div>
    </div>
  );
}
