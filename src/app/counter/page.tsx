"use client";
import { useEffect, useState, useRef } from "react";
import styles from "../page.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5000");
    socket.onopen = () => console.log("app connected to server");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "request_counter") {
        socket.send(
          JSON.stringify({ type: "counter_value", count: countRef.current })
        );
      }
    };

    socket.onclose = () => console.log("app disconnected from server");

    return () => {
      socket.close();
    };
  }, []);

  const handleChangeCount = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      countRef.current = newCount;
      return newCount;
    });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Counter: {count}</h1>
        <button onClick={handleChangeCount}>Increase counter</button>

        <p>
          for run wss server in console run command &quot;node wsserver.js&quot;
        </p>
      </main>

      <div>
        <h2>What I would improve:</h2>
        <ul>
          <li>
            <p>
              Reconnection and error handling – I would add error handling for
              connection drops with automatic reconnection, as well as
              notifications for users if the connection is lost.
            </p>
          </li>
          <li>
            <p>
              Data sending optimization – I would change the logic so that the
              server requests data only when necessary, rather than on every
              counter update.
            </p>
          </li>
          <li>
            <p>
              Acknowledgments and logging – I would add a mechanism to
              acknowledge receipt of data from the client to the server and
              implement logging for better tracking.
            </p>
          </li>
          <li>
            <p>
              UI for connection status – I would implement a WebSocket
              connection status indicator (e.g., "Connected" / "Disconnected"
              text).
            </p>
          </li>
          <li>
            <p>
              Authorization system – I would add authorization for WebSocket
              connections, using tokens for secure interaction with multiple
              clients.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Counter;

// If it works for you, pls feel free to continue with the small tech task:
// React and Nodejs task. This task has a time limit of 30 minutes. Record your screen and attach the solution files with the screen recording pls.
// Create a React component called Counter. The component should show a counter value and a button. Each click on the button should increase the counter by one.
// Create a Nodejs server that listens to connections on WebSocket. Send a message to all connected clients once a second. The message should ask the clients for their current counter value.
// On the Counter component, listen to these messages and send back the current counter value.
// On the backend, print the responses.
// Write down the weaknesses of your design and what you would improve if you had more time.

// Pls note the reasons of previous failed results:
// fail, the code creates a new ws connection on every count change.
// Fail - is sending the counter to the backend with every update, its not what was asked.
