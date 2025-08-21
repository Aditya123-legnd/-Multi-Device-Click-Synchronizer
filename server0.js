//This server code allows multiple devices to synchronize click events in real-time using Socket.IO.
// It listens for click events from one device and broadcasts them to all other connected devices.
// The frontend should be set up to emit 'clickEvent' and listen for 'performClick'.

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public")); // Serve frontend

// Handle socket connections
io.on("connection", (socket) => {
  console.log("Device connected:", socket.id);

  // When one device clicks, broadcast to all others
  socket.on("clickEvent", (data) => {
    console.log("Click received:", data);
    socket.broadcast.emit("performClick", data);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
