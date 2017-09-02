var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var data = require("./seed.js");

app.use("/",express.static(__dirname+"/public"));
app.use("/",bodyParser.urlencoded({extended:false}));

app.get("/api/todos",function (req,res) {
   res.json(data.todos);
});

app.delete("/api/todos/:id",function (req,res) {
   var id_to_del = req.params.id;
   var todo = data.todos[id_to_del];

   if(!todo){
      res.status(400).json({error: "TODO doesnt exist"});
   }
   else{
      todo.status = data.StatusENUMS.DELETED;
      res.json(data.todos);
   }
});


app.post("/api/todos",function (req,res) {
   var todo = req.body.todo_title;

   if(!todo || todo==""||todo.trim()==""){
       res.status(400).json({error: "TODO_title doesnt exist"});
   }
   else{
      var new_todo_object = {
         title: todo,
          status: data.StatusENUMS.ACTIVE
      }
      data.todos[data.next_todo_id++] = new_todo_object;

      res.json(data.todos);
   }
});

app.put("/api/todos/ACTIVE/:id",function (req,res) {

    var id_to_del = req.params.id;
    var todo = data.todos[id_to_del];

    if(!todo) {
        res.status(400).json({error: "TODO doesnt exist"});
    }
    else{
        todo.status = data.StatusENUMS.ACTIVE;
        res.json(data.todos);
    }
});

app.put("/api/todos/COMPLETED/:id",function (req,res) {
    var id_to_del = req.params.id;
    var todo = data.todos[id_to_del];

    if(!todo){
        res.status(400).json({error: "TODO doesnt exist"});
    }
    else{
        todo.status = data.StatusENUMS.COMPLETE;
        res.json(data.todos);
    }
});

app.put("/api/todos/:id",function (req,res) {
    var mod_id = req.params.id;
    var todo = data.todos[mod_id];

    if(!todo){
        res.status(400).json({error: "This todo doesnt exist so cant modify"});
    }
    else{
        var todo_title = req.body.todo_title;

        if(todo_title && todo_title!="" && todo_title.trim()!=""){
           todo.title = todo_title;
        }

        var todo_status = req.body.todo_status;

        if(todo_status && (todo_status=="ACTIVE" ||todo_status=="COMPLETE") ){
           todo.status = todo_status;
        }
        res.json(data.todos);
    }
});

app.get("/api/todos/:state",function (req,res) {
    var obj = {};
    var statetemp = req.params.state.toUpperCase();

    for(var i in data.todos){
        if(data.todos[i].status == statetemp) {
            obj[i] = data.todos[i];
        }
    }
    res.json(obj);
});
app.listen(4000);