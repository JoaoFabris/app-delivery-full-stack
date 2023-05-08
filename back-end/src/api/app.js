const express = require('express');
const {
  UserController,
  SaleController,
  ProductController,
  SaleProductController } = require('../database/controller');
const ErrorHandler = require('../database/middlewares/ErrorHandler');

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

const app = express();
app.use(express.json());
app.use(accessControl);

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/users', UserController.getAll);
app.post('/users', UserController.createUser);
app.post('/login', UserController.login);

app.get('/sales', SaleController.getAll);
app.post('/sales', SaleController.createSale);
app.put('/sales/:id', SaleController.updateSale);

app.get('/products', ProductController.getAll);

app.get('/sales/products', SaleProductController.getAll);
app.post('/sales/products', SaleProductController.createSaleProduct);

app.use(ErrorHandler.handle);
module.exports = app;
