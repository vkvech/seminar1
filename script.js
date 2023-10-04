function smajlik()//emoji je přímo zadané do elementu 
{
    let history =  document.getElementById("rada"); //deklarace proměné history, abych furt nemusel psát document...
    let vypis = document.getElementById("vypis");

    vypis.innerHTML="   😊"; // vypis (to co jsme deklarovali).innerHTML to co se má vypsat do elementu, který je v HTML
    history.innerHTML+="😊"; // += přidává k jíž existujicímu kontentu v daném elementu
}


function srdce()//emoji je přímo zadané do elementu 
{
    let history =  document.getElementById("rada");
    let vypis = document.getElementById("vypis");
    let emoji="❤"; //zde je deklarované srdíčko do proměné emoji

    vypis.innerHTML=emoji;
    history.innerHTML+=emoji;
}

function palec()//emoji je přímo zadané do elementu 
{
    let history =  document.getElementById("rada");
    let vypis = document.getElementById("vypis");
    let emoji="👍"; //zde je deklarované srdíčko do proměné emoji

    vypis.innerHTML=emoji;
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

function smazatprvni()
{
    let text = document.getElementById("rada");
    let remove_text = text.innerHTML.slice(1);

    text.innerHTML= remove_text;
}

function smazat()
{
    document.getElementById("vypis").innerHTML="";
    document.getElementById("rada").innerHTML="";
}

function smazatposledni()
{
    let text = document.getElementById("rada");
    let remove_text = text.innerHTML.slice(0, text.innerHTML.length -1);

    text.innerHTML= remove_text;
}