// Import
var net = require('net');

// Specify the host and port to connect
var host = "127.0.0.1"
var port = 42181

// create a new client
var client = new net.Socket();

client.connect(port, host, () => {
    console.log(`Connected to Server: ${host}:${port}`)
})

// Receive the data which server sends
client.on("data", (data) => {
    console.log(`Receieved: ${data}`)
})

// Close the connection
client.on("close" , (data) => {
    console.log("Disconnected from server");
    // console.log(data);
})
