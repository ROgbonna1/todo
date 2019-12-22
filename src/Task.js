function Task(task, dueDate) {
  this.task = task;
  this.task_id = ++Task.id_counter;
  this.dueDate = new Date(dueDate);
  this.isComplete = false;
}

Task.prototype = {
  constructor: Task,
  toggleComplete: function() {
    this.isComplete = !this.isComplete;
    return this.isComplete;
  },
  updateTask: function(newTask) {
    this.task = newTask;
    return newTask;
  },
  updateDueDate: function(newDateStr) {
    this.dueDate = new Date(newDateStr);
  }
}

Task.id_counter = 0;

module.exports = Task;