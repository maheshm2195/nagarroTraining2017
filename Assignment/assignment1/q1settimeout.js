function setTimeOutSyncro(callback,n) {

    var start = (new Date()).getTime();

    while( (new Date()).getTime() - start <= n  ){

    }
    callback(n);
}

function callback(n) {
    console.log(n + " millis elapsed!");
}

console.log("Log Before call");
setTimeOutSyncro(callback,9000);
console.log("Log After call");