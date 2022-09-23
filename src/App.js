import "./App.css";
import { startPolling, stopPolling } from "./actions.js";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.users.loading);

  return (
    <>
      <button onClick={() => dispatch(startPolling())}>Start Polling</button>
      <button onClick={() => dispatch(stopPolling())}>Stop Polling</button>
      {loading ? <h2>Loading...</h2> :
        <h3 className="app">{users.content}</h3>}
        {console.log(users)}
    </>
  );
}

export default App;