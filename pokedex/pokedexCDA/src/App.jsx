import { useState } from 'react'
import PresentationPokedex from './PresentationPokedex';
import PokemonStarter from './PokemonStarter.jsx'
import Card from './card.jsx'
import Equipe from './equipe.jsx'
function  App() {
  const [searchTerm, setSearchTerm] = useState('');
  

  return(
    <>
    <PresentationPokedex />
    <Card />
    <PokemonStarter />
    <Equipe />
    </>
  )
}

export default App
