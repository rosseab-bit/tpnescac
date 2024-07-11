const express = require('express');
const defaultRoute = express.Router();
const connection = require('./db');

defaultRoute.get('/index', (req, res) => {
  res.send({ title: 'Express' });
});

// GET METHOD
defaultRoute.get('/services', (req, res) => {
  connection.query('SELECT * FROM servicios', (error, results, fields) => {
    if (error) {
      res.status(500).send('Error executing the query');
      console.error(error);
      return;
    }
    res.json(results);
  });
});
defaultRoute.get('/clients', (req, res) => {
  connection.query('SELECT * FROM usuarios', (error, results, fields) => {
    if (error) {
      res.status(500).send('Error executing the query');
      console.error(error);
      return;
    }
    res.json(results);
  });
});
// GET METHOD


// POST METHOD
defaultRoute.post('/clients', (req, res) => {
  connection.query('INSERT INTO usuarios SET ?', req.body, (err, results) => {
  if (err) {
    console.error('Error al insertar usuario: ' + err.message);
  res.status(404).send('POST: Error')
    return;
  }
  console.log('Nuevo usuario insertado con ID:', results.insertId);
  res.status(200).send('POST: Success')
});
  console.log('POST: Clientes que recibo: ', JSON.stringify(req.body))
  res.status(200).send('POST: Success')
});


defaultRoute.post('/services', (req, res) => {
  connection.query('INSERT INTO servicios SET ?', req.body, (err, results) => {
  if (err) {
    console.error('Error al insertar usuario: ' + err.message);
  res.status(404).send('POST: Error')
    return;
  }
  console.log('Nuevo usuario insertado con ID:', results.insertId);
  res.status(200).send('POST: Success')
});
  console.log('POST: Services que recibo: ', JSON.stringify(req.body))
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
  connection.query('DELETE FROM usuarios WHERE id = ?', req.query.id, (err, results) => {
  if (err) {
    console.error('Error al eliminar usuario: ' + err.message);
    return;
  }
  console.log('Usuario eliminado correctamente');
});
  console.log('DELETE: Clientes que recibo: ', JSON.stringify(req.query.id))
  res.status(200).send('DELETE: Success')
});


defaultRoute.delete('/services', (req, res) => {
  connection.query('DELETE FROM servicios WHERE id = ?', req.query.id, (err, results) => {
  if (err) {
    console.error('Error al eliminar usuario: ' + err.message);
    return;
  }
  console.log('Usuario eliminado correctamente');
});
  console.log('DELETE: Services que recibo: ', JSON.stringify(req.query.id))
  res.status(200).send('DELETE: Success')
});
// DELETE METHOD
module.exports = defaultRoute;
