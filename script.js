var history =  document.getElementById("rada");
var vypis = document.getElementById("vypis");

function smajlik()//emoji je přímo zadané do elementu 
{
    vypis.innerHTML="😊";
    history.innerHTML+="😊";
}

function srdce()//emoji je v promněné 
{
    let emoji="❤";
    
    history.innerHTML+="❤";

    document.getElementById("vypis").innerHTML=emoji;

}

function palec()
{
    let emoji= document.getElementById("palec1").innerHTML;
    document.getElementById("vypis").innerHTML=emoji;


history.innerHTML+=emoji;
}

function univerzalni(emoji) 
{
document.getElementById("vypis").innerHTML=emoji;
document.getElementById("rada").innerHTML+=emoji;

}

function pridat()
{
    let vlastni = document.getElementById("vstup").value;
    document.getElementById("rada").innerHTML+=vlastni;
}