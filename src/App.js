import "./App.css"
import { startPolling, stopPolling } from "./actions.js";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function App() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);

  return (
    <>
      <div className="App">
        <p>Click the buttons to start and stop polling</p>
        <Card style={{ width: "90%", maxWidth: "40rem" }}>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{quotes.content}</p>
              {quotes.author && (
                <footer className="blockquote-footer">
                  <cite title="Source Title">{quotes.author}</cite>
                </footer>
              )}
            </blockquote>
          </Card.Body>
        </Card>
        <div className="m-5">
          <Button onClick={() => dispatch(startPolling())}>Start Polling</Button>
          <br />
          <br />
          <Button onClick={() => dispatch(stopPolling())}>Stop Polling</Button>
        </div>
      </div>
    </>
  );
}

export default App;