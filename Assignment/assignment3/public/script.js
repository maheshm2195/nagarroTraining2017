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