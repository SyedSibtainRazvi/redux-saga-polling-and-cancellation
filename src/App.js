import "./App.css"
import { startPolling, stopPolling } from "./actions.js";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  return (
    <>
      <div className="App">
        <Card style={{ width: "90%", maxWidth: "40rem" }}>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{users.content}</p>
              {users.author && (
                <footer className="blockquote-footer">
                  <cite title="Source Title">{users.author}</cite>
                </footer>
              )}
            </blockquote>
          </Card.Body>
        </Card>
        <div className="m-4">
          <Button className="margin" onClick={() => dispatch(startPolling())}>Start Polling</Button>
          <Button onClick={() => dispatch(stopPolling())}>Stop Polling</Button>
        </div>
      </div>
    </>
  );
}

export default App;