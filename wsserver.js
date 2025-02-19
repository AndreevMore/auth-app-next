import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 5000 });

wss.on("connection", function connection(ws) {
  console.log("connection established");

  ws.on("error", console.error);

  ws.on("message", function message(data) {
    console.log("received data: %s", data);
  });

  const interval = setInterval(()=>{
    ws.send(JSON.stringify({type:'request_counter'}));
  },1000)

  ws.on("close", function message() {
    console.log("ws connection closed");
    clearInterval(interval);
  });

//   ws.send("something");
});
