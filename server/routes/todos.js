var todosApi = {

    getAll: function(req, res) {
        var user = req.query.user;
        var allTodos = todos;
        if(user) {
            allTodos = [];
            for(var i=0; i<todos.length; i++) {
                if(todos[i].user == user)
                    allTodos.push(todos[i])
            }
        }
         // Spoof a DB call
        res.json(allTodos);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var todo = findById(id); // Spoof a DB call
        res.json(todo);
    },

    create: function(req, res) {
        var newTodo = req.body;
        newTodo.id = ++lastIdUsed;
        todos.push(newTodo); // Spoof a DB call
        res.json(newTodo);
    },

    update: function(req, res) {
        var updateTodo = req.body;
        var id = parseInt(req.params.id);
        index = findIndexById(id);
        todos[index] = updateTodo // Spoof a DB call
        res.json(updateTodo);
    },

    delete: function(req, res) {
        var id = parseInt(req.params.id);
        var index = findIndexById(id);
        todos.splice(index, 1) // Spoof a DB call
        res.json(true);
    }
};

var lastIdUsed = 0;

function findById(id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            return todos[i];
        }
    }
}

function findIndexById(id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            return i;
        }
    }
}

var todos = [];

module.exports = todosApi;
