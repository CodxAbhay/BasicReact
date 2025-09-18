export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through"
    }
    let newStyle = {
        fontWeight: 'bold'
    }
    let styles = {
        backgroundColor : "pink",
        borderRadius : "3px"
    }
  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp; &nbsp;
      <span style={newStyle}>{newPrice}</span>
    </div>
  );
}
 