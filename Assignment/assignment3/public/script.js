// const TODO_LIST_ID = "todos_list_div";
const NEW_TODO_INPUT = "new_todo_input";
const RESPONSE_DONE = 4;
const STATUS_OK = 200;

window.onunload = getTodosAJAX();

function getTodosAJAX() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/api/todos",true);
    xhr.onreadystatechange = function () {

        if(xhr.readyState==RESPONSE_DONE){
            if(xhr.status == STATUS_OK){
                //console.log(xhr.responseText);
                // addTodoElements(TODO_LIST_ID,xhr.responseText);
                addTodoElements(xhr.responseText);
            }
        }
    };
    xhr.send(data=null);
};

function addTodoElements(todos_data_json) {
    var todos = JSON.parse(todos_data_json);
    var ACTIVEparent = document.getElementById("ACTIVEdiv");
    ACTIVEparent.innerHTML="";
    var COMPLETEparent = document.getElementById("COMPLETEdiv");
    COMPLETEparent.innerHTML="";
    var DELETEDparent = document.getElementById("DELETEDdiv");
    DELETEDparent.innerHTML="";

    Object.keys(todos).forEach(function (key) {
        var todo_element = createTodoElement(key,todos[key]);
        if(todos[key].status=="ACTIVE")
        {
            ACTIVEparent.appendChild(todo_element);
        }
        else if(todos[key].status=="COMPLETE")
        {
            COMPLETEparent.appendChild(todo_element);
        }
        else if(todos[key].status=="DELETED")
        {
            DELETEDparent.appendChild(todo_element);
        }
    });
};

function createTodoElement(id,todo_object) {
    var todo_element = document.createElement("div");
    todo_element.innerText = todo_object.title;
    todo_element.setAttribute("data-id",id);
    todo_element.setAttribute(
        "class", "todoStatus"+ todo_object.status + " " + "breathVertical" );

    if (todo_object.status == "ACTIVE"){

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        checkbox.value = "Mark as Complete";
        checkbox.setAttribute("onclick", "completeTodoAJAX("+id+")");
        checkbox.setAttribute("class", "breathHorizontal");
        var temp = todo_element.innerHTML;
        todo_element.innerHTML = "";
        todo_element.appendChild(checkbox);
        todo_element.innerHTML += temp;

        var complete_button = document.createElement("button");
        complete_button.innerText = "X";
        complete_button.background = "#FFFFFF";
        complete_button.setAttribute("onclick", "deleteTodoAJAX("+id+")");
        complete_button.setAttribute("class", "breathHorizontal transparentButton");
        todo_element.appendChild(complete_button);
    };

    return todo_element;
};

function addTodoAJAX() {
    var value = document.getElementById(NEW_TODO_INPUT).value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST","/api/todos",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    var data = "todo_title="+encodeURI(value);

    xhr.onreadystatechange = function () {

        if(xhr.readyState == RESPONSE_DONE){

            if(xhr.status == STATUS_OK){
                addTodoElements(xhr.responseText);
            }
            else{
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send(data);
};


function activeTodoAJAX(id){
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "/api/todos/"+id, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = "todo_status=ACTIVE";

    xhr.onreadystatechange = function(){
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                addTodoElements(xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send(data);
};

function completeTodoAJAX(id){
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "/api/todos/"+id, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = "todo_status=COMPLETE";

    xhr.onreadystatechange = function(){
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                addTodoElements(xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send(data);
};

function deleteTodoAJAX(id){
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "/api/todos/"+id, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = "todo_status=DELETED";

    xhr.onreadystatechange = function(){
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                addTodoElements(xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send(data);
};