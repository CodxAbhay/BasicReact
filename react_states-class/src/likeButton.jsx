import { useState } from "react";

export default function LikeButton() {
  // this is how we use react state
  // setisLike is a function which render the complete function when dedect any changes in the given state
  let [isLike, setisLike] = useState(false);
  let toggleLike = () => {
    setisLike(!isLike);
  };

  let setstyle = {
    color: "red",
  };
  return (
    <div>
      <p onClick={toggleLike}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={setstyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
