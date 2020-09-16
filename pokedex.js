
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


function numberFinder() {
    var numberinput = document.getElementById("search-2").value;
    switch (numberinput) {

        case "1": alert("The Pokemon is Bulbasaur");
            break;
        case "2": alert("The Pokemon is Ivysaur");
            break;
        case "3": alert("The Pokemon is venusaur");
            break;
        case "4": alert("The Pokemon is Charmander");
            break;
        case "5": alert("The Pokemon is Charmeleon");
            break;
        case "6": alert("The Pokemon is Charizard");
            break;
        case "7": alert("The Pokemon is Squirtle");
            break;
        case "8": alert("The Pokemon is Wartortle");
            break;
        case "9": alert("The Pokemon is Blastoise");
            break;
        case "10": alert("The Pokemon is Caterpie");
            break;
        case "11": alert("The Pokemon is Metapod");
            break;
        case "12": alert("The Pokemon is Butterfree");
            break;
        case "13": alert("The Pokemon is Weedle");
            break;
        case "14": alert("The Pokemon is Kakuna");
            break;
        case "15": alert("The Pokemon is Beedrill");
            break;
        case "16": alert("The Pokemon is Pidgey");
            break;
        case "17": alert("The Pokemon is Pidgeotto");
            break;
        case "18": alert("The Pokemon is Pidgeot");
            break;
        case "19": alert("The Pokemon is Rattata");
            break;
        case "20": alert("The Pokemon is Raticate");
            break;
        default:
            alert("error, the number is not between 1-20. Please try again")
            break;

    }



}

