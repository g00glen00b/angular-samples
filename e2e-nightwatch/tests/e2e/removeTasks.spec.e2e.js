module.exports = {
  'Remove single task': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .setValue('#new-todo', 'My other new task')
      .submitForm('#todo-form')
      .execute(function() {
        document.getElementById('todo-list').children[0].children[0].children[2].click();
      })
      .assert.containsText('#todo-count', '1 item left')
      .assert.containsText('#todo-list li:first-child', 'My other new task')
      .end();
  },

  'Clear all completed tasks': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .setValue('#new-todo', 'My other new task')
      .submitForm('#todo-form')
      .click('#todo-list li:nth-child(2) .toggle')
      .click('#clear-completed')
      .assert.containsText('#todo-count', '1 item left')
      .assert.containsText('#todo-list li:first-child', 'My new task')
      .end();
  },

  'Clear completed tasks is only visible if there are completed tasks': function(client) {
    client
      .url('http://todomvc.com/examples/angularjs/#/')
      .waitForElementVisible('#header h1', 1000)
      .setValue('#new-todo', 'My new task')
      .submitForm('#todo-form')
      .assert.hidden('#clear-completed')
      .click('#todo-list li:first-child .toggle')
      .assert.visible('#clear-completed')
      .end();
  }
};
