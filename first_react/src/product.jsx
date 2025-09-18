import "./product.css";
import Price from "./price.jsx";

function Product({ title = "Default Title", idx }) {
  let oldPrices = ["11,221", "34,214", "1,322", "15,342"];
  let newPrices = ["10,000", "30,000", "1,000", "13,000"];
  let description = [
    ["800+ DPI","Play Games Smothly"],
    ["Great for Apple User","Great for writing notes"],
    ["Amazing tools for people","Run for atleast 10 days"],
    ["Wireless and best", "Use from Anywhere Anytime"]
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
