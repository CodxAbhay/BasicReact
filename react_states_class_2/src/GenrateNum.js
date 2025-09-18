export function GenrateNum(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let randomNum = Math.floor(Math.random() * 10 );
    arr.push(randomNum);
  }
  return arr;
}

export function TotalSum(arr) {
  let totalsum = arr.reduce((sum, num) => {
    return sum + num; // ✅ Return the accumulated sum
  }, 0); // ✅ Initial value

  return totalsum;
}

export default { GenrateNum, TotalSum };

