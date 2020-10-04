
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