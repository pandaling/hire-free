import request from 'request';
import { graphql } from 'graphql';
import schema from '../../graphql';

async function getUser(req, res, next) {
  try {
    const query = decodeURIComponent(req.query.query);
    const resp = await graphql(schema, query, { req });
    res.status(200).send(resp);
  }
  catch (e) {
    res.status(500).send(e.message || e);
  }
}

async function getUsers(req, res, next) {
  try {
    const query = `{ users{ _id username email phoneNumber skillSets hobby createdAt updatedAt} }`;
    const resp = await graphql(schema, query, { req });
    res.status(200).send(resp);
  }
  catch (e) {
    res.status(500).send(e.message || e);
  }
}

async function createUser(req, res, next) {
  try {
    const mutation = `mutation {
      createUser(user: ${req.body.mutation}) {
        username email phoneNumber skillSets hobby
      }
    }`;
    const dev = await graphql(schema, mutation, { req });
    res.status(200).send(dev);
  }
  catch (e) {
    res.status(500).send(e.message || e);
  }
}

async function updateUser(req, res, next) {
  try {
    const mutation = `mutation {
      updateUser(_id: "${req.params.id}", user: ${req.body.mutation}) {
        username email phoneNumber skillSets hobby
      }
    }`;
    const dev = await graphql(schema, mutation, { req });
    res.status(200).send(dev);
  }
  catch (e) {
    res.status(500).send(e.message || e);
  }
}

async function deleteUser(req, res, next) {
  try {
    const mutation = `mutation {
      deleteUser(_id: "${req.params.id}") {
        username
      }
    }`;
    const dev = await graphql(schema, mutation, { req });
    res.status(200).send(dev);
  }
  catch (e) {
    res.status(500).send(e.message || e);
  }
}

export default {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
