// 使用wss连接到wss://echo.websocket.org
const WebSocket = require('ws');

const ws = new WebSocket('wss://echo.websocket.org');

ws.on('open', function open() {
    ws.send('something');
    console.log('send something');
});

ws.on('message', function incoming(data) {
    console.log(data);

    if (data === 'ping') {
        ws.send('pong');
        console.log('send pong');
    
    } else if (data === 'pong') {
        console.log('receive pong');
    }  
})