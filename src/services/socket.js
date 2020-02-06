import socketio from 'socket.io-client';

const socket = socketio(process.env.REACT_APP_API_URL, {
  autoConnect: false,
});

function subscribeToNewRequestMusic(subscribFunction){
  socket.on('Novo-Pedido', subscribFunction);
}

function connect(radio_id) {
  socket.io.opts.query = {
    radio_id
  }

  socket.connect()
};

function disconnect() {
  if(socket.connected){
    socket.disconnect()
  }
}

export {
  connect,
  disconnect,
  subscribeToNewRequestMusic
}