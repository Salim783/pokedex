import React, { useState } from 'react';
import Card from './card';
import PokemonStarter from './PokemonStarter.jsx';

function Equipe() {
    const [equipe, setEquipe] = useState([]);
    const [pokemon, setPokemon] = useState(null); // Définir un état pour stocker le Pokemon

    const addToTeam = (pokemon) => {
        setEquipe([...equipe, pokemon]);
    };

    // Fonction pour définir le Pokemon sélectionné
    const selectPokemon = (pokemon) => {
        setPokemon(pokemon);
    };

    return (
        <>
            <h2>Équipe Pokémon</h2>
            <div className='card'>
                {equipe.map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon} addToTeam={addToTeam} />
                ))}
            </div>
            {/* Passer le Pokemon sélectionné à PokemonStarter */}
            {pokemon && <PokemonStarter pokemon={pokemon} addToTeam={addToTeam} />}
        </>
    );
}

export default Equipe;
