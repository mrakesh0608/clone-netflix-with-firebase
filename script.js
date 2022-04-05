let FQ = document.getElementsByClassName('FQ');
let FA = document.getElementsByClassName('FA');
let OC = document.getElementsByClassName('oc');
let HR = document.getElementsByClassName('hr');


for (let index = 0; index < FQ.length; index++) 
{
    FQ[index].addEventListener('click' , () =>{
        if (FA[index].style.display === "none") 
        {
            FA[index].style.display = "block";
            HR[index].style.display = "block";
            OC[index].innerHTML = "x";
        } 
        else
        {
            FA[index].style.display = "none";
            HR[index].style.display = "none";
            OC[index].innerHTML = "+";
        }
    });
}