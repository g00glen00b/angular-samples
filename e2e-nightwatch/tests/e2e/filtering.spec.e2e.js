module.exports = {
  'Active filter shows non-completed items': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/active')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .assert.containsText('#todo-list li:first-child label', 'My new task')
      .end();
  },

  'Active filter hides completed items': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/active')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .click('#todo-list li:first-child .toggle')
      .assert.elementNotPresent('#todo-list li')
      .end();
  },

  'Completed filter only contains completed tasks': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .click('#todo-list li:first-child .toggle')
      .click('#filters li:nth-child(3) a')
      .assert.containsText('#todo-list li:first-child label', 'My new task')
      .end();
  },

  'Completed filter does not contain non-completed tasks': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .click('#filters li:nth-child(3) a')
      .assert.elementNotPresent('#todo-list li')
      .end();
  }
};
