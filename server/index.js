import http from 'http';
import app from './src';

const port = process.env.PORT || 6001;

const server = http.createServer(app);
server.listen(port, () => {
  return console.log('Started server listening on port ' + port);
});
