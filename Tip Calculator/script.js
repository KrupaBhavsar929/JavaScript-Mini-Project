const tip=document.querySelector('#tipPercentage');
console.log(tip);
const Amount=document.querySelector('#billAmount');
console.log(Amount);
const totalh5=document.querySelector('h5');


function add()
{
    if(tip.value==='' && Amount.value==='')
    {
        alert("enter valid data");
    }
    else
    {
    let total=Number(tip.value)+Number(Amount.value);
    totalh5.innerText=`$${total}`;
    }

   
}