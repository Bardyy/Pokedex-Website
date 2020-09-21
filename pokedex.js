
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var arr = []
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && arr.length < 5) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


function numberFinder() {
    var numberinput = document.getElementById("search-2").value;
    switch (numberinput) {

        case "1": alert("1. Bulbasaur is a stage 1 poison/grass pokemon which has a rarity of 4 and is caught in the wild.");
            break;
        case "2": alert("Ivysaur is a stage 2 poison/grass pokemon which has a rarity of 5 and is caught in the wild");
            break;
        case "3": alert("Venusaur is a stage 3 poison/grass pokemon which has a rarity of 6 and is caught in the wild");
            break;
        case "4": alert("Charmander is a stage 1 fire pokemon which has a rarity of 4 and is caught in the wild");
            break;
        case "5": alert("Charmeleon is a stage 2 fire pokemon which has a rarity of 5 and is caught in the wild");
            break;
        case "6": alert("Charizard is a stage 3 fire/flying pokemon which has a rarity of 6 and is caught in the wild");
            break;
        case "7": alert("Squirtle is a stage 1 water pokemon which has a rarity of 4 and is caught in the wild");
            break;
        case "8": alert("Wartortle is a stage 2 water pokemon which has a rarity of 5 and is caught in the wild");
            break;
        case "9": alert("Blastoise is a stage 3 water pokemon which has a rarity of 6 and is caught in the wild");
            break;
        case "10": alert("Caterpie is a stage 1 bug pokemon which has a rarity of 1 and is caught in the wild");
            break;
        case "11": alert("Metapod is a stage 2 bug pokemon which has a rarity of 3 and is caught in the wild");
            break;
        case "12": alert("Butterfree is a stage 3 bug/flying pokemon which has a rarity of 4 and is caught in the wild");
            break;
        case "13": alert("Weedle is a stage 1 bug/poison pokemon which has a rarity of 1 and is caught in the wild");
            break;
        case "14": alert("Kakuna is a stage 2 bug/poison pokemon which has a rarity of 3 and is caught in the wild");
            break;
        case "15": alert("Beedrill is a stage 3 bug/poison pokemon which has a rarity of 4 and is caught in the wild");
            break;
        case "16": alert("Pidgey is a stage 1 flying pokemon which has a rarity of 1 and is caught in the wild");
            break;
        case "17": alert("Pidgeotto is a stage 2 flying pokemon which has a rarity of 3 and is caught in the wild");
            break;
        case "18": alert("Pidgeot is a stage 3 flying pokemon which has a rarity of 4 and is caught in the wild");
            break;
        case "19": alert("Rattata is a stage 1 normal pokemon which has a rarity of 1 and is caught in the wild");
            break;
        case "20": alert("Raticate is a stage 2 normal pokemon which has a rarity of 4 and is caught in the wild");
            break;
        default:
            alert("error, the number is not between 1-20. Please try again")
            break;

    }



}

