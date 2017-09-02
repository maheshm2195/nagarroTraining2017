var StatusENUMS = {
    ACTIVE: "ACTIVE",
    COMPLETE: "COMPLETE",
    DELETED: "DELETED"
};

var todos = {
    1 : {title: "hihih JS", status: StatusENUMS.ACTIVE},
    2 : {title: "GIT tmmmmmmmmuto", status: StatusENUMS.COMPLETE},
    3 : {title: "Inter GIT", status: StatusENUMS.ACTIVE}
};

var next_todo_id = 4;

module.exports = {
    StatusENUMS: StatusENUMS,
    todos: todos,
    next_todo_id: next_todo_id
};