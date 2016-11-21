
function require(filename) {
    var inputFile = new XMLHttpRequest();
    var module = {};
    inputFile.open("GET", filename, false);
    inputFile.onreadystatechange = function () {
        if(inputFile.readyState === 4 && inputFile.status === 200 ) {
           new Function("module", inputFile.responseText)(module);
        }
    };
    inputFile.send(null);
    return module;
}

