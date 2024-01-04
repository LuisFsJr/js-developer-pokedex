const pokemonHere = document.querySelector("#pokemonList")
const loadMoreButton = document.querySelector("#loadMoreButton")
const limit = 5
let offset = 0
const maxRecords = 11

function loadPokemonItems(offset, limit){
    pokeAPI.getPokemons(offset, limit)
    .then((pokemons = []) => {
        pokemonHere.innerHTML += pokemons.map((pokemon)=>`
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
    
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>
    
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </li>
        `).join('')
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener("click",()=>{
    offset += limit
    loadPokemonItems(offset, limit)
})