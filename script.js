let FQ = document.getElementsByClassName('FQ');
let FA = document.getElementsByClassName('FA');
let OC = document.getElementsByClassName('oc');
let HR = document.getElementsByClassName('hr');

for (let index = 0; index < FQ.length; index++) 
{
    FQ[index].addEventListener('click', ()=>{
        
        let current = FA[index].style.display;
        closeAllFA();
        
        if (current === 'none') 
        {
            FA[index].style.display = "block";
            HR[index].style.display = "block";
            OC[index].innerHTML = "x";
        }
    })
}

function closeAllFA()
{
    for (let index = 0; index < FQ.length; index++) 
    {
        FA[index].style.display = "none";
        HR[index].style.display = "none";
        OC[index].innerHTML = "+";
    }
}
