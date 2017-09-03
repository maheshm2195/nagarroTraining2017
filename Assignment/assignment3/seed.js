var StatusENUMS = {
    ACTIVE: "ACTIVE",
    COMPLETE: "COMPLETE",
    DELETED: "DELETED"
};

var todos = {
    1 : {title: "Read JS", status: StatusENUMS.ACTIVE},
    2 : {title: "GIT tutorial", status: StatusENUMS.COMPLETE},
    3 : {title: "Implement GIT", status: StatusENUMS.ACTIVE},
    4 : {title: "Learn CSS", status: StatusENUMS.ACTIVE},
    5 : {title: "Install Webstorm", status: StatusENUMS.COMPLETE},
    6 : {title: "Async JS", status: StatusENUMS.COMPLETE},
    7 : {title: "Understand callback", status: StatusENUMS.DELETED},
    8 : {title: "Implement Callbacks", status: StatusENUMS.DELETED},

};

var next_todo_id = 4;

module.exports = {
    StatusENUMS: StatusENUMS,
    todos: todos,
    next_todo_id: next_todo_id
};