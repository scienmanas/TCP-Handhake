var net = require('net');

// Specify port and ip (loopback)
var port = 42181;
// We bind it with IP address so that it listens for the connection only on this port
// 0.0.0.0 can be used, this will bind it to all the IP - means in LAN anyone can do the stuff
// In custom prod protocols 0.0.0.0 is used but there is a firewall
var host = "127.0.0.1"

// Create a server
const server = net.createServer(socket => {
  console.log(`Connected from ${socket.remoteAddress}:${socket.remotePort}`);

  socket.on("end", () => {
    console.log("Server: Client Disconnected");
  });

  socket.on("error", err => {
    console.error("Socket error:", err.message);
  });
  
  socket.on("close", hadError => {
    console.log("Socket closed", hadError ? "with error" : "cleanly");
  });

  socket.write("hello client, I am Manas");
  socket.end();
});

// server.listen(port, host);
// Other way
// server.on("listening", () => {
//    const addr = server.address();
//    console.log(`Server listening for connections at ${addr.address}:${addr.port}`)
// })
server.listen(port, host , () => {
    console.log(`Server listening at: ${host}:${port}`)
})
