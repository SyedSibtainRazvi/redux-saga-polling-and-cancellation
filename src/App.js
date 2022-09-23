import { startPolling, stopPolling } from "./actions.js";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  return (
    <>
      <button onClick={() => dispatch(startPolling())}>Start Polling</button>
      <button onClick={() => dispatch(stopPolling())}>Stop Polling</button>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h3 key={i}>{user.name}</h3>)}
    </>
  );
}

export default App;