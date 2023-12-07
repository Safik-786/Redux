import { useDispatch,useSelector } from "react-redux";
import { increase, decrease } from "./action";
function App() {
  const mystate= useSelector((state)=>state.inc_dec)
  const dispatch= useDispatch()
  return (

    <>
      <div style={{ textAlign: "center" }}>

        <h2>welcome to react redux</h2>
          <input type="text"  value={mystate}/><br /><br />
        <button className="btn btn-primary mx-3" onClick={()=>dispatch(increase())}>Add</button>
        <button className="btn btn-danger" onClick={()=>dispatch(decrease())}>Minus</button>
      </div>
    </>
  )

}

export default App;
