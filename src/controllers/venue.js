/* eslint-disable new-cap, array-callback-return, no-param-reassign */

import express from 'express';
import Seat from '../models/seat';

const router = module.exports = express.Router();

// router.get('/', (req, res) => {
//   Seat.find((err, seats) => {
//     const seats = Seat.find();
//     const viewTasks = tasks.map(t => new ViewTask(t, priorities));
//     res.render('tasks/index', { viewTasks });
//   });
// });

// router.get('/new', (req, res) => {
//   const priorities = Priority.find();
//   const categories = Category.find();
//   res.render('tasks/new', { priorities, categories });
// });
//
  router.post('/', (req, res) => {
    console.log("POST /venue reached Server");
    const quantity = req.body.quantity;
    const location = req.body.location;
    console.log ('location:', req.body.location);
    for (let i = 1; i <= quantity; i++) {
      let seat = new Seat({seatNo: i , location, isAvaliable: true});
      seat.save(() => {
        if (i === quantity) {
          res.send({ serverstatus: 'success' });
        }
      });
    }
  });

//
// router.post('/:id/complete', (req, res) => {
//   Task.findById(req.params.id, (err, task) => {
//     task.update({ isComplete: !task.isComplete }, () => {
//       res.redirect('/tasks');
//     });
//   });
// });
//
// router.post('/:id/delete', (req, res) => {
//   Task.findByIdAndRemove(req.params.id, () => {
//     res.redirect('/tasks');
//   });
// });
//
// router.get('/:id/edit', (req, res) => {
//   const priorities = Priority.find();
//   const categories = Category.find();
//   Task.findById(req.params.id, (err, task) => {
//     const viewTask = new ViewTask(task, priorities);
//     res.render('tasks/new', { task: viewTask, priorities, categories });
//   });
// });
//
// router.post('/:id', (req, res) => {
//   Task.findByIdAndUpdate(req.params.id, req.body, () => {
//     res.redirect('/tasks');
//   });
// });
