import WebSocket from 'ws';
import { string } from 'zod';

const ws = new WebSocket('ws://localhost:8080');

ws.on('error', console.error);

ws.on('message', function message(data) {
  console.log('Received message');
  console.log(String(data));
});