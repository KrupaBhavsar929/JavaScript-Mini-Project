
document.getElementById('counter').addEventListener('click', myFunction);
var counterVar=0;
function myFunction()
{

document.getElementById('counter').innerHTML=counterVar;

}

document.getElementById('plus').addEventListener('click', increment);
document.getElementById('minus').addEventListener('click',decrement);
var checkValue;
function decrement()
{
    
    checkValue=parseInt(changeValue.value);
    counterVar=counterVar-checkValue;
    document.getElementById('counter').innerHTML=counterVar;
}
const changeValue=document.querySelector('#inputType');
function increment()
{
    
    checkValue=parseInt(changeValue.value);
    counterVar=counterVar+checkValue;
    document.getElementById('counter').innerHTML=counterVar;
}


var data=document.getElementById('inputType').value="1";
console.log(data);



document.getElementById('resetBtnFunction').addEventListener('click', reset);

function reset()
{
    document.getElementById('counter').innerText="0";
}


var t=document.getElementById('inputType').innerText
console.log("d:"+ t);

