function pridat()
{
    let vlastni = document.getElementById("vstup").value;
    document.getElementById("vypis").innerHTML+=vlastni;
}

function smazatL()
{
    let text = document.getElementById("vypis");
    let smazano = text.innerHTML.slice(1);
    text.innerHTML = smazano;
}

function smazatP()
{
    let text = document.getElementById("vypis");
    let smazano = text.innerHTML.slice(0, text.innerHTML.length -1);
    text.innerHTML = smazano;
}

function odstranit()
{
    document.getElementById("vypis").innerHTML=""

}