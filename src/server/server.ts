import {createServer, Server, Socket } from "net";

export class TcpServer {
    private host = '127.0.0.1';
    private port = 8888;
    private server: Server;

    constructor(host:string, port: number) {
        // TODO: how make dynamic host
        this.host = host;
        this.port = port;
        this.server = createServer();
        this.server.on('connection', this.handleConnection);
        

    }

    private handleConnection(socket: Socket)  {
            // Print on console server
            console.log('Just a TCP Server');

            

            socket.on('data', function(data){
                console.log(data);
                let textChunk = data.toString('utf8');
                console.log(textChunk);
                socket.write(textChunk);
                
                // close connection
                socket.end();
            });

            // return data to client
            socket.write('-------------');

            
            
    }


    

    public listen(){
        this.server.listen(this.port);
    }


    /*def start(self):
    # create a socket object
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # bind the socket object to the address and port
    s.bind((self.host, self.port))
    # start listening for connections
    s.listen(5)

    print("Listening at", s.getsockname())

    while True:
        # accept any new connection
        conn, addr = s.accept()

        print("Connected by", addr)

        # read the data sent by the client (1024 bytes)
        data = conn.recv(1024)

         */


}