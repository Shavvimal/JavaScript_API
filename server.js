const http = require('http'); 
const server = http.createServer(requestHandler);


function requestHandler(request, response) {
    
}





function startServer() {
    server.listen(5000, 'localhost', () => console.log('server listening on port 5000')) 
}



module.exports = startServer

