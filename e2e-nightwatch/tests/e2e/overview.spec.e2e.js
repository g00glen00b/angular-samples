module.exports = {
  'Does initially focus on the input field': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .assert.elementPresent('#header #new-todo:focus')
      .end();
  },

  'Does not show the task list if there are no tasks': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .assert.hidden('#main')
      .end();
  },

  'Does not show the footer if there are no tasks': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .assert.hidden('#footer')
      .end();
  },

  'Shows todo items': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .assert.containsText('#todo-list li:first-child label', 'My new task')
      .end();
  },

  'Strikes through completed items': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .click('#todo-list li:first-child .toggle')
      .assert.cssClassPresent('#todo-list li:first-child', 'completed')
      .end();
  },

  'Shows how many items there are left': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .setValue('#new-todo', 'My other new task')
      .submitForm('#todo-form')
      .assert.containsText('#todo-count', '2 items left')
      .click('#todo-list li:first-child .toggle')
      .assert.containsText('#todo-count', '1 item left')
      .end();
  },

  'Does not add empty or blank tasks': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .submitForm('#todo-form')
      .setValue('#new-todo', '  ')
      .submitForm('#todo-form')
      .assert.containsText('#todo-count', '1 item left')
      .end();
  }
};
