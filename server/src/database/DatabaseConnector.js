import mongoose from 'mongoose';
import schema from './schema';
import config from '../../config';

export default class DatabaseConnector {
  constructor() {
    const mongoConnectionString = 'mongodb://{uri}/{dbname}';
    const { mongoDbName, mongoUri } = config;
    let path = mongoConnectionString
      .replace(new RegExp('{uri}', 'g'), mongoUri)
      .replace(new RegExp('{dbname}', 'g'), mongoDbName);

    mongoose.connect(path, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', err => console.error('err', err));
    db.once('open', () => console.info('mongodb connected to ' + path));

    this.db = schema;
  }
}
