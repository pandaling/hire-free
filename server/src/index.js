import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import { graphqlHTTP } from 'express-graphql';
import Database from './database';
import Api from './api/routes';
import schema from './graphql';

const app = express();

app.disable('x-powered-by');
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * join html
 */
const fileDir = path.join(__dirname, '..', '..', 'dist');
const assetsDir = path.join(fileDir, 'assets');
app.use(express.static(fileDir));
app.use(express.static(assetsDir));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: fileDir }, (err) => {
    res.end();

    if (err) throw err;
  });
});

/**
 * setup graphql
 */
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: false,
}));

const db = new Database(app);
const api = new Api(app);

/**
 * error handler
 */
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'development')
    res.status(500).json({ status: false, stack: err.stack });
  else
    res.status(500).json({ status: false, message: 'something went wrong' });
});

export default app;
