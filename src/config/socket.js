import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080/', { autoConnect: false });

export default socket;
