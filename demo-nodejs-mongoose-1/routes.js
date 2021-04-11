const express = require('express');
const employeeController = require('./controllers/employee.controller');


const employeeRouter = express.Router();

employeeRouter.post('/', employeeController.create);
employeeRouter.get('/', employeeController.getAll);
employeeRouter.get('/:id', employeeController.getById); // /employees/123
employeeRouter.delete('/:id', employeeController.deleteById);///employees/132
employeeRouter.get('/sort/:id', employeeController.sortById);///employees/sort/132

const routes = (app) => {

  app.use('/employees', employeeRouter);

  app.get('/', (req, res) => {
    return res.send({ message: "Employee Service Up!"});
  }) 
}

module.exports = routes;