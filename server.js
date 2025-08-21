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
