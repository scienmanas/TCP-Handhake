# TCP-Handhake

A simple server &amp; client js file to show 3-way handshake

## Concept

- The TCP follows a 3-way handshake to establish a connection, the files in these repo are there to demonstrate the same. 
- When you visulaize the handshake you will see total 8 transmissions as after the connection is established, we are sending the data and asking to close the connection to the client to the server (note here, server asks to close the connection, use can do reverse by making the client close the connection.)

## Images

- You maybe see sometimes 9 total transmissions or 8, the reason is your system, how old it is, the newer system will have 8 tranmissions mostly, now the reason is the client is sending only one ack for (packet 7) : a) it has recieved the connection closing request and b) it has closed the connection. In older system, you may find serparate ack for both the task.

<img width="1470" height="163" alt="image" src="https://github.com/user-attachments/assets/c63a5b04-5861-4947-9fbd-29c9f74c427e" />

## Resources

I got this nicely written article on medium which can help u understand if you are still confused: https://medium.com/@kusal95/tcp-3-way-handshake-process-1fd9a056a2f4
