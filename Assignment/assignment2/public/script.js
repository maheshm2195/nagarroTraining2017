var TODO_LIST_ID = "todos_list_div";

function add_todo_element(id,todos_data_json) {
var parent = document.getElementById(id);
parent.innerHTML = todos_data_json;
}

function getTodosAJAX() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET","/api/todos",true);

    xhr.onreadystatechange = function () {

        if(xhr.readyState==4){

            if(xhr.status == 200){
                console.log(xhr.responseText);
                add_todo_element(TODO_LIST_ID,xhr.responseText);
            }

        }

    };

    xhr.send(data=null);
}