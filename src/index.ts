import debug from 'debug';

import App from './app';

debug('ts-express:server');

const port = Number.parseInt(process.env.PORT || '3000');
if (Number.isNaN(port)) {
  console.error('PORT must be a number');
  process.exit(1);
}

const server = App.listen(port, () => {
  console.info(`Serveur disponible à http://localhost:${port}`);
});
server.on('error', onError);
server.on('listening', onListening);

function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== 'listen') throw error;
  let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` :
    (addr ? `port ${addr.port}` : ``);
  debug(`Listening on ${bind}`);
}
