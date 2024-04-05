'use strict';


/**
 * Create a new task
 *
 * body Task 
 * returns Task
 **/
exports.createTask = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "id" : 0,
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a task by ID
 *
 * taskId Integer ID of the task to retrieve/update/delete
 * no response value expected for this operation
 **/
exports.deleteTaskById = function(taskId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get a task by ID
 *
 * taskId Integer ID of the task to retrieve/update/delete
 * returns Task
 **/
exports.getTaskById = function(taskId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "id" : 0,
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all tasks
 *
 * returns List
 **/
exports.getTasks = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "id" : 0,
  "title" : "title"
}, {
  "description" : "description",
  "id" : 0,
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a task by ID
 *
 * body Task 
 * taskId Integer ID of the task to retrieve/update/delete
 * returns Task
 **/
exports.updateTaskById = function(body,taskId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "description" : "description",
  "id" : 0,
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

