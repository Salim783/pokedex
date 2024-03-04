import React, { useState, useEffect } from 'react';
import Card from './card.jsx'; // Importer le composant Card
import './Pokemonstarter.css'; // Assurez-vous que useState et useEffect sont importés dans le fichier CSS si nécessaire

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [equipe, setEquipe] = useState([]);

  const apiUrl = 'https://pokebuildapi.fr/api/v1/pokemon';

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokemon list');
        }
        const data = await response.json();
        setPokemonList(data);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    }

    fetchPokemonList();
  }, []);

  useEffect(() => {
    // Si le terme de recherche est vide, on réinitialise searchedPokemon à null
    if (!searchTerm) {
      setSearchedPokemon(null);
      return;
    }

    // Chercher le Pokémon correspondant au terme de recherche
    const foundPokemon = pokemonList.find(pokemon => pokemon.name.includes(searchTerm.toLowerCase()));
    setSearchedPokemon(foundPokemon);
  }, [pokemonList, searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // La recherche est déclenchée automatiquement par useEffect
    // Pas besoin de mettre de la logique ici
  };

  const handleAddToTeam = () => {
    if (searchedPokemon) {
      setEquipe([...equipe, searchedPokemon]);
      console.log('Pokemon ajouté à l\'équipe :', searchedPokemon);
    }
  };

  return (
    <div>
      <h2>Liste des Pokémon</h2>
      <input
        type="text"
        placeholder="Rechercher un Pokémon"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Rechercher</button>

      {searchedPokemon && (
        <div className='card'>
          <img src={searchedPokemon.image} className='pokeimg' alt={searchedPokemon.name} />
          <h2 className='pokename'>{searchedPokemon.name}</h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  {/* Vérifiez si searchedPokemon.stats est défini avant d'accéder à ses propriétés */}
                  {searchedPokemon.stats && (
                    <>
                      <li>Hp: {searchedPokemon.stats.HP}</li>
                      <li>Defense: {searchedPokemon.stats.defense}</li>
                      <li>Special Defense: {searchedPokemon.stats.special_defense}</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                {/* Vérifiez si searchedPokemon.apiTypes est défini avant d'utiliser map */}
                {searchedPokemon.apiTypes && searchedPokemon.apiTypes.map((type, index) => (
                  <img key={index} src={type.image} className='imgtype2' alt={type.name} />
                ))}
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
        </div>
      )}

      {/* Afficher la liste complète des Pokémon si aucun terme de recherche n'est saisi */}
      {!searchedPokemon && (
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      )}

      {/* Section pour afficher les Pokémon de l'équipe */}
      <h2>Équipe Pokémon</h2>
      <div className='equipe'>
        {equipe.map((pokemon, index) => (
          <div className='card' key={index}>
            <img src={pokemon.image} className='pokeimg' alt={pokemon.name} />
            <h2 className='pokename'>{pokemon.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
