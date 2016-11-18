/**
 * Created by trkmn27 on 17.11.2016.
 */
function require(filename) {
    var module = {exports: null};
    var inputFile = new XMLHttpRequest();
    inputFile.open("GET", filename);
    inputFile.onreadystatechange = function () {
        if(inputFile.readyState === 4 && inputFile.status === 200 ) {
            return new Function("function", inputFile.responseText);
        }

    };
}
