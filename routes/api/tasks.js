const express = require('express'),
  router = express.Router();

// Tasks model

const Task = require('../../models/task');

// @route GET api/tasks
// desc Get all tasks
// @access Public

router.get('/', (req, res) => {
  Task.find()
    .sort({ date: -1 })
    .then(tasks => res.json(items));
});

// @route POST api/tasks
// desc Create new task
// @access Public

router.post('/', (req, res) => {
  const newTask = new Task({
    name: req.body.name,
    completed: false
  });
  newTask.save().then(task => res.json(task));
});

// @route DELETE api/tasks/:id
// desc Delete a task
// @access Public

router.delete('/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => task.remove())
    .then(() => console.log(res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
