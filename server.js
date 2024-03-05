const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.use("/", require("./server/routes/router"));

var server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const io = require("socket.io")(server, {
  allowEIO3: true,
});

var userConnection = [];

io.on("connection", (socket) => {
  console.log("Socket id is:", socket.id);
  socket.on("userconnect", (data) => {
    userConnection.push({
      connectionId: socket.id,
      userID: data.displayName,
    });
    var userCount = userConnection.length;
    console.log("userCount", userCount);
  });
  socket.on("offerSentToRemote", (data) => {
    var offerReceiver = userConnection.find((o) => o.userID == data.remoteUser);
    if (offerReceiver) {
      console.log("offerReceiver user is", offerReceiver.connectionId);
      socket.to(offerReceiver.connectionId).emit("ReceiveOffer", data); // Corrected event name
    }
  });
  socket.on("answerSentToUser1", (data) => {
    var candidateReceiver = userConnection.find((o) => o.userID == data.receiver);
    if(candidateReceiver){
        console.log("candidateReceiver user is", candidateReceiver.connectionId);
        socket.to(candidateReceiver.connectionId).emit("ReceiveAnswer", data); // Corrected event name
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
    var disUser = userConnection.find((p) => p.connectionId == socket.id);
    if (disUser) {
      userConnection = userConnection.filter((p) => p.connectionId != socket.id);
      console.log("Remaining users:", userConnection.map((user) => user.userID));
    }
  });
});
