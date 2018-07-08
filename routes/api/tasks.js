const express = require('express'),
  router = express.Router();

// Tasks model

const Task = require('../../models/task');

// @route GET api/tasks
// desc Get all tasks
// @access Public

router.get('/', (req, res) => {
  Task.find().sort({date: -1}).then(tasks => res.json(items));
});

module.exports = router;
