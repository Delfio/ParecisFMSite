import socketio from 'socket.io-client';

const socket = socketio(process.env.REACT_APP_API_URL, {
  autoConnect: false,
});

function connect() {
  socket.connect()
}

function disconnect() {
  if(socket.connected){
    socket.disconnect()
  }
}

export {
  connect,
  disconnect
}