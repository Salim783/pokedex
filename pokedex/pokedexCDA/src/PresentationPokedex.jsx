import React from 'react'
import './PresentationPokedex.css'
function PresentationPokedex(){
    return (
    <>
    <div className='container'>
        <div  className="presentation">
          <h1>POKEDEX</h1>
          <p>Découvrez le monde fascinant des Pokémon avec notre Pokédex ultime! Que vous
          soyez un Maître Pokémon en devenir ou simplement curieux de découvrir chaque
          créature unique, notre base de données complète est votre porte d'entrée vers
          une aventure extraordinaire. Explorez les caractéristiques, les forces, et les
          faiblesses de chaque Pokémon, plongez dans leur univers, et devenez l'expert
          ultime
          </p>
          </div>
          <section>
            <ul className='list'>
              <li>Recherche Instantanée par Nom: Ne perdez plus jamais de temps à chercher votre
                  Pokémon préféré. Entrez simplement son nom pour accéder instantanément à une
                  mine d'informations.
              </li>
              <li>
                Fiches Détaillées: Chaque Pokémon est unique, et notre Pokedex célèbre cette
                diversité.
              </li>
              <li>
                Toujours Plus à Découvrir: Nous nous engageons à enrichir constamment le
                Pokedex avec de nouvelles fonctionnalités passionnantes. Restez à l'affût!
              </li>
            </ul>
          </section>
          </div>
          <form>inscription pour la newsletter:</form>
      <input type="mail" placeholder="mail" />
      <button>S'inscrire</button>
    </>
      )
}
export default PresentationPokedex