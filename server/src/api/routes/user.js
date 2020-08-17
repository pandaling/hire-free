import express from 'express';
import controllerUser from '../controllers/controllerUser';

const user = app => {
  const router = express.Router();

  /**
   * Routes
   */
  router
    .get('/get-user', controllerUser.getUser)
    .get('/get-all-users', controllerUser.getUsers)
    .put('/update-user/:id', controllerUser.updateUser)
    .post('/create-user', controllerUser.createUser)
    .delete('/delete-user/:id', controllerUser.deleteUser);

  return router;
};

export default user;
