const express = require('express');
//const router = express.Router();
const defaultRoute = express.Router();

defaultRoute.get('/index', (req, res) => {
  res.send({ title: 'Express' });
});

// GET METHOD
defaultRoute.get('/product', (req, res) => {
  res.send({ title: 'GET: Products' });
});
defaultRoute.get('/services', (req, res) => {
  res.send({ title: 'GET: Services' });
});
defaultRoute.get('/clients', (req, res) => {
  res.send({ title: 'GET: Clients' });
});
// GET METHOD


// POST METHOD
defaultRoute.post('/clients', (req, res) => {
  console.log('POST: Clientes que recibo: ', JSON.stringify(req.body))
  res.status(200).send('POST: Success')
});
defaultRoute.post('/product', (req, res) => {
  console.log('POST: Productos que recibo: ', JSON.stringify(req.body))
  res.status(200).send('POST: Success')
});
defaultRoute.post('/services', (req, res) => {
  console.log('POST: Services que recibo: ', JSON.stringify(req.body))
  res.status(200).send('POST: Success')
});
// POST METHOD



// PUT METHOD
defaultRoute.put('/clients', (req, res) => {
  console.log('PUT: Clientes que recibo: ', JSON.stringify(req.body))
  res.status(200).send('PUT: Success')
});
defaultRoute.put('/product', (req, res) => {
  console.log('PUT: Productos que recibo: ', JSON.stringify(req.body))
  res.status(200).send('PUT: Success')
});
defaultRoute.put('/services', (req, res) => {
  console.log('PUT: Services que recibo: ', JSON.stringify(req.body))
  res.status(200).send('PUT: Success')
});

// PUT METHOD





// DELETE METHOD
defaultRoute.delete('/clients', (req, res) => {
  console.log('DELETE: Clientes que recibo: ', JSON.stringify(req.body))
  res.status(200).send('DELETE: Success')
});
defaultRoute.delete('/product', (req, res) => {
  console.log('DELETE: Productos que recibo: ', JSON.stringify(req.body))
  res.status(200).send('DELETE: Success')
});
defaultRoute.delete('/services', (req, res) => {
  console.log('DELETE: Services que recibo: ', JSON.stringify(req.body))
  res.status(200).send('DELETE: Success')
});
// DELETE METHOD
module.exports = defaultRoute;
