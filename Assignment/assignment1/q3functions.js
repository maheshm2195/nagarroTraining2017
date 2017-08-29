var a= [1,2,6];

function square(i) {
    console.log(i*i);
};

function forEach(array,callback) {
    for(i=0;i<array.length;i++){
        callback(array[i]);
    }
}

//forEach sample call below

//forEach(a,square);


function squareMap(i) {
    return i*i;
};

function map(array,callback) {
    var newArr = [];

    for(i=0;i<array.length;i++){
        newArr[i] = callback(array[i]);
    }
    return newArr;
}

//map sample call below

// var newArray = map(a,squareMap);
// console.log(newArray);