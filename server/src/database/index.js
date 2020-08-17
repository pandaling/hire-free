import DatabaseConnector from './DatabaseConnector';

export default class Database {
  constructor(app) {
    app.db = new DatabaseConnector();
  }
}
