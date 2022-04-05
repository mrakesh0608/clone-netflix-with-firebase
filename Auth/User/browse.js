let Series = document.getElementById('Series');
let Films = document.getElementById('Films');

document.getElementById('series-btn').addEventListener('click',() =>{
    Films.style.display = "none";
    Series.style.display = "block";
});
document.getElementById('films-btn').addEventListener('click',() =>{
    Series.style.display = "none";
    Films.style.display = "block";
});;

//Cards-desc
let card = document.getElementsByClassName('card');
let CF = document.getElementsByClassName('cf');
for (let index = 0; index < card.length; index++) 
{
    card[index].addEventListener('click', ()=>{
        closeAllcards();
        CF[index].style.display = 'flex';
    })
}
function closeAllcards()
{
    for (let index = 0; index < card.length; index++) 
    {
        CF[index].style.display = 'none';
    }
}

// close Card-feature
let closeCF = document.getElementsByClassName('close-cf');
for (let index = 0; index < card.length; index++) 
{
    closeCF[index].addEventListener('click', ()=>{
        closeAllcards();
    })
}

//Videoplayer
let play = document.getElementsByClassName('play');
let videoP = document.getElementById('video-player');
for (let index = 0; index < play.length; index++) 
{
    play[index].addEventListener('click', ()=>{
        videoP.style.display = 'flex';
    })
}

videoP.addEventListener('dblclick',()=>{

        document.getElementById('vide').pause();
        document.getElementById('vide').currentTime=0;
        videoP.style.display = 'none';
})