
import './App.css'
import Lottery from './Lottery.jsx'
import LoduBoard from "./LoduBoard.jsx"


function App() {

  // we can pass a function as a prop example is here : -
  let WinCondition = (ticket) =>{
    return ticket[0] == 0;
  }

  return (
    <>
    <Lottery n={18} Condition={WinCondition}/>
    <LoduBoard/>

    </>
  )
}

export default App
