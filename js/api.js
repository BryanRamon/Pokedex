const pokemonInput = document.querySelector('.nav__search--input');
const btn = document.querySelector('.nav__search--btn');
const box = document.querySelector('.menu__center__screen__box');

const obtenerJson = async (pokemon) => {
    pokemon = pokemon.toLowerCase();
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const json = await data.json();
    console.log(json);
    let plantilla='';
    const habilidad = json.abilities[0].ability.name;
    const imagen = json.sprites.front_default;
    plantilla += `
        <h2>${json.forms[0].name}</h2>
        <img src="${imagen}" alt="">
        <p>Habilidad: <span>${habilidad}</span></p>`;
    box.innerHTML = plantilla; 
}

btn.addEventListener('click', function () {
    obtenerJson(pokemonInput.value);
});
