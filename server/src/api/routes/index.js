import user from './user';

export default class Endpoint {
  constructor(app) {
    app.use('/graph-api', user(app));
  }
}
