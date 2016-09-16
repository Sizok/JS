var length = 8;
var height = 8;
var cell;

for (var i=0; i<length; i++){
    var row = '';

    for (var j=0; j<height; j++){
        if(isEven(i)){
            cell = isEven(j)? '#' : ' ';
        }else{
            cell = isEven(j)? ' ' : '#';
        }
        row += cell
    }
    console.log(row);
}
function isEven(n) {
    return n %2 === 0;
}