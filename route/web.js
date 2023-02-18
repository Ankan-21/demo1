
const express = require('express');
const route = express.Router();
const controller = require('../controller/usercontroller');

route.get('/', controller.home);
route.get('/addStudent', controller.add)
route.post('/createStudent', controller.create)
route.get('/edit/:id',controller.edit)
route.post('/update',controller.update)
route.get('/delete/:id',controller.deletee)


// parameter theke id tolar jonno- params used


module.exports = route;

