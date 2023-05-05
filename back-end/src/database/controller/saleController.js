const SaleService = require('../services/saleService');

const getAll = async (_req, res, next) => {
  try {
    const users = await SaleService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

const createSale = async (req, res, next) => {
  try {
    const saleObj = req.body;
    const newSale = await SaleService.createSale(saleObj);
    return res.status(201).json(newSale);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const updateSale = async (req, res, next) => {
  try {
    const { status } = req.body;
    const { id } = req.params;
    await SaleService.updateSaleStatus(Number(id), status);

    const sale = await SaleService.getSaleById(Number(id));
    return res.status(202).json(sale);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};
module.exports = {
  getAll,
  createSale,
  updateSale,
};