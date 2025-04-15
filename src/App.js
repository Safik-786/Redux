import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, add20, reset } from "./action";
function App() {
  const mystate = useSelector((state) => state.inc_dec) // here 'state.inc_dec' because humne combineReducer() use kiya hai (inside redecers/index.js) . Agar single reducer hoga to there is no need to create combine reducer and we can get our current state  "const mystate= useSelector((state)=>state)" like this
  console.log('mystate', mystate)
  const dispatch = useDispatch()
  return (
    <>
      <div style={{ textAlign: "center" }} className=" shadow-lg w-25 py-5 mx-auto my-3" >
        <h2>welcome to react redux</h2>
        <input type="text" value={mystate} /><br /><br />
        <button className="btn btn-primary mx-3" onClick={() => dispatch(increase())}>Add</button>
        <button className="btn btn-danger mx-3" onClick={() => dispatch(decrease())}>Minus</button>
        <button className="btn btn-warning mx-3" onClick={() => dispatch(add20())}>+20</button>
        <button className="btn btn-success mx-3" onClick={() => dispatch(reset())}>Reset</button>
      </div>

      
    </>
  )
}

export default App;
