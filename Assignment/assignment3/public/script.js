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
                addTodoElements(xhr.responseText);
            }
        }
    };
    xhr.send(data=null);
};

function addTodoElements(todos_data_json) {
    var todos = JSON.parse(todos_data_json);
    var ACTIVEparent = document.getElementById("ACTIVEtable");
    ACTIVEparent.innerHTML="";
    var COMPLETEparent = document.getElementById("COMPLETEtable");
    COMPLETEparent.innerHTML="";
    var DELETEDparent = document.getElementById("DELETEDtable");
    DELETEDparent.innerHTML="";

    Object.keys(todos).forEach(function (key) {
        var todo_element = createTodoElement(key,todos[key]);
        if(todos[key].status=="ACTIVE")
        {
            var row = ACTIVEparent.insertRow(0);
            row.innerHTML = todo_element;
        }
        else if(todos[key].status=="COMPLETE")
        {
            var row = COMPLETEparent.insertRow(0);
            row.innerHTML = todo_element;
        }
        else if(todos[key].status=="DELETED")
        {
            var row = DELETEDparent.insertRow(0);
            row.innerHTML = todo_element;
        }
    });
};

function createTodoElement(id,todo_object) {
    var classText = "todoStatus"+ todo_object.status + " " + "breathVertical";
    var mainText = "<td style='width:200px; display: inline-block; word-wrap: break-word; white-space: -moz-pre-wrap !important;' " +
        "data-id='id' class="+classText+" >"+todo_object.title+"</td>";

    if (todo_object.status == "ACTIVE"){

        var checkbox =
            "<td><input type='checkbox' name='checkbox' value = 'Mark as Complete' onclick='completeTodoAJAX("+id+")' class='breathHorizontal'></td>";

        var button = "<td><button onclick='deleteTodoAJAX("+id+")' class='breathHorizontal transparentButton' >X</button></td> ";
        return (checkbox+" "+mainText+" "+button);
    };


    if (todo_object.status == "COMPLETE"){

        var checkbox =
            "<td><input checked='true' type=\"checkbox\" name=\"checkbox\" value = \"Mark as Complete\" onclick='activeTodoAJAX("+id+")' class='breathHorizontal'></td>";

        var button = "<td><button onclick='deleteTodoAJAX("+id+")' class='breathHorizontal transparentButton' >X</button></td> ";

        return (checkbox+" "+mainText+" "+button);

    };
    return (mainText);

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

function hideDelTodos(){
    var delTable = document.getElementById("DELETEDtable");
    delTable.style.display = (delTable.style.display == "table") ? "none" : "table";
    var textlabel = document.getElementById("hideDelId");
    if(delTable.style.display == "table"){
        textlabel.innerText = "Hide deleted todos";
    }
    else{
        textlabel.innerText = "Unhide deleted todos";
    }
}

function hideCompTodos(){
    var compTable = document.getElementById("COMPLETEtable");
    compTable.style.display = (compTable.style.display == "table") ? "none" : "table";
    var textlabel = document.getElementById("hideCompId");
    if(compTable.style.display == "table"){
        textlabel.innerText = "Hide completed todos";
    }
    else{
        textlabel.innerText = "Unhide completed todos";
    }
}