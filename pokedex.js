
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


function autocomplete(inp, arr) {
    var currentFocus;

    inp.addEventListener("input", function (e) {
        var a, b, c, i, val = this.value;

        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "searchItems");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                c = document.createElement("img");
                c.setAttribute("src", "img/pokemon-" + (i + 1) + ".png");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
                b.appendChild(c);
            }
        }
    });

    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {

            currentFocus++;

            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;

            addActive(x);
        } else if (e.keyCode == 13) {

            e.preventDefault();
            if (currentFocus > -1) {

                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("searchItems");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
var pokemons =
    ["1. Bulbasaur is a stage 1 poison/grass pokemon which has a rarity of 4 and is caught in the wild ",
        "2. Ivysaur is a stage 2 poison/grass pokemon which has a rarity of 5 and is caught in the wild",
        "3. Venusaur is a stage 3 poison/grass pokemon which has a rarity of 6 and is caught in the wild",
        "4. Charmander is a stage 1 fire pokemon which has a rarity of 4 and is caught in the wild",
        "5. Charmeleon is a stage 2 fire pokemon which has a rarity of 5 and is caught in the wild",
        "6. Charizard is a stage 3 fire/flying pokemon which has a rarity of 6 and is caught in the wild",
        "7. Squirtle is a stage 1 water pokemon which has a rarity of 4 and is caught in the wild",
        "8. Wartortle is a stage 2 water pokemon which has a rarity of 5 and is caught in the wild",
        "9. Blastoise is a stage 3 water pokemon which has a rarity of 6 and is caught in the wild",
        "10. Caterpie is a stage 1 bug pokemon which has a rarity of 1 and is caught in the wild",
        "11. Metapod is a stage 2 bug pokemon which has a rarity of 3 and is caught in the wild",
        "12. Butterfree is a stage 3 bug/flying pokemon which has a rarity of 4 and is caught in the wild",
        "13. Weedle is a stage 1 bug/poison pokemon which has a rarity of 1 and is caught in the wild",
        "14. Kakuna is a stage 2 bug/poison pokemon which has a rarity of 3 and is caught in the wild",
        "15. Beedrill is a stage 3 bug/poison pokemon which has a rarity of 4 and is caught in the wild",
        "16. Pidgey is a stage 1 flying pokemon which has a rarity of 1 and is caught in the wild",
        "17. Pidgeotto is a stage 2 flying pokemon which has a rarity of 3 and is caught in the wild",
        "18. Pidgeot is a stage 3 flying pokemon which has a rarity of 4 and is caught in the wild",
        "19. Rattata is a stage 1 normal pokemon which has a rarity of 1 and is caught in the wild",
        "20. Raticate is a stage 2 normal pokemon which has a rarity of 4 and is caught in the wild",];
autocomplete(document.getElementById("myInput"), pokemons);
var pokemons = ["Bulbasaur is a stage 1 poison/grass pokemon which has a rarity of 4 and is caught in the wild ",
    "Ivysaur is a stage 2 poison/grass pokemon which has a rarity of 5 and is caught in the wild",
    "Venusaur is a stage 3 poison/grass pokemon which has a rarity of 6 and is caught in the wild",
    "Charmander is a stage 1 fire pokemon which has a rarity of 4 and is caught in the wild",
    "Charmeleon is a stage 2 fire pokemon which has a rarity of 5 and is caught in the wild",
    "Charizard is a stage 3 fire/flying pokemon which has a rarity of 6 and is caught in the wild",
    "Squirtle is a stage 1 water pokemon which has a rarity of 4 and is caught in the wild",
    "Wartortle is a stage 2 water pokemon which has a rarity of 5 and is caught in the wild",
    "Blastoise is a stage 3 water pokemon which has a rarity of 6 and is caught in the wild",
    "Caterpie is a stage 1 bug pokemon which has a rarity of 1 and is caught in the wild",
    "Metapod is a stage 2 bug pokemon which has a rarity of 3 and is caught in the wild",
    "Butterfree is a stage 3 bug/flying pokemon which has a rarity of 4 and is caught in the wild",
    "Weedle is a stage 1 bug/poison pokemon which has a rarity of 1 and is caught in the wild",
    "Kakuna is a stage 2 bug/poison pokemon which has a rarity of 3 and is caught in the wild",
    "Beedrill is a stage 3 bug/poison pokemon which has a rarity of 4 and is caught in the wild",
    "Pidgey is a stage 1 flying pokemon which has a rarity of 1 and is caught in the wild",
    "Pidgeotto is a stage 2 flying pokemon which has a rarity of 3 and is caught in the wild",
    "Pidgeot is a stage 3 flying pokemon which has a rarity of 4 and is caught in the wild",
    "Rattata is a stage 1 normal pokemon which has a rarity of 1 and is caught in the wild",
    "Raticate is a stage 2 normal pokemon which has a rarity of 4 and is caught in the wild",];
autocomplete(document.getElementById("myInput2"), pokemons);
