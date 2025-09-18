function handleClick(event) {
  console.log("Hello!!");
  console.log(event);
}

function HandleMouseOver(){
    console.log("Bye!!");
}

function handleDblClick(){
    console.log("Clicking Double time on the button");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}> Click me</button>
      <p onMouseOver={HandleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aut
        expedita consequatur natus iusto perspiciatis soluta, vel rerum enim
        placeat illo aliquam delectus ad. Incidunt corporis laudantium commodi
        optio vel!
      </p>
      <button onDoubleClick={handleDblClick} >Click Me Double Time</button>
    </div>
  );
}
