
const Pokemons = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise',
    'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate'];

document.getElementById('search').addEventListener('input', (e) => {

    let pokemonArray = [];
    if (e.target.value) {
        pokemonArray = Pokemons.filter(Pokemon => Pokemon.toLowerCase().includes(e.target.value));
        pokemonArray = pokemonArray.map(Pokemon => '<li>' + Pokemon + '</li>');

    }
    showPokemonArray(pokemonArray);

});


function showPokemonArray(pokemonArray) {
    const html = !pokemonArray.length ? '' : pokemonArray.join('');
    (document.querySelector('ul').innerHTML = html);
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

    }



}

