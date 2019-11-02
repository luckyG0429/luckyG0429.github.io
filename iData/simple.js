/**
 * @param {number} number
 * @param {number} bitPosition - zero based
 * @return {number}
 * **/

export default function getBit(number, bitPosition) {
    return (numbrt >> bitPosition) & 1
}



/**
 * click for work
 * **/
var _ko = 0;
setInterval(function(){
    if(_ko>6) return false;
    $('#clockLink button').trigger("click");
    _ko++
},60000 * 35)