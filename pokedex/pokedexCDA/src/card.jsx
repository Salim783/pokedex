import React from 'react';
import Bulbi from './assets/bulbi.png';
import Feu from './assets/feu.webp'
import Salam from './assets/salameche.png'
import Cara from './assets/carapuce.png'
import Eau from './assets/eau.webp'
import Plante from './assets/Plantes.webp'
import Germi from './assets/germi.png'
import Poussif from './assets/poussif.png'
import Gobou from './assets/gobou.png'
import Heri from './assets/heri.png'
import Kaimi from './assets/kaimi.png'
import Arcko from './assets/arko.png'
function Card({ pokemon, addToTeam}){
    const handleAddToTeam = () => {
        addToTeam(pokemon);
        console.log('Pokemon ajouté à l\'équipe :', pokemon);
    };
    return(
<>
<div className="box">
    <h2>Rouge et Bleu</h2>
    <div className="flexcard">
    <div className='card'>
          <img src={Bulbi} className='pokeimg' />
          <h2 className='pokename'>Bulbizarre</h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  <li>Hp: 45</li>
                  <li>Defense: 49</li>
                  <li>Special Defense: 65</li>
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                  <img src={Plante} className='imgtype2' />
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
    </div>
    <div className='card'>
          <img src={Salam} className='pokeimg' />
          <h2 className='pokename'>Salameche</h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  <li>Hp: 45</li>
                  <li>Defense: 49</li>
                  <li>Special Defense: 65</li>
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                  <img src={Feu} className='imgtype2' />
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
    </div>
    <div className='card'>
          <img src={Cara} className='pokeimg' />
          <h2 className='pokename'>Carapuce</h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  <li>Hp: 45</li>
                  <li>Defense: 49</li>
                  <li>Special Defense: 65</li>
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                  <img src={Eau} className='imgtype2' />
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
    </div>
    </div>
</div>




<div className="box">
    <h2>Or et Argent</h2>
    <div className="flexcard">
    <div className='card'>
          <img src={Germi} className='pokeimg' />
          <h2 className='pokename'>Germignion</h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  <li>Hp: 45</li>
                  <li>Defense: 49</li>
                  <li>Special Defense: 65</li>
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                  <img src={Plante} className='imgtype2' />
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
    </div>
    <div className='card'>
          <img src={Heri} className='pokeimg' />
          <h2 className='pokename'>Hericendre</h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  <li>Hp: 45</li>
                  <li>Defense: 49</li>
                  <li>Special Defense: 65</li>
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                  <img src={Feu} className='imgtype2' />
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
    </div>
    <div className='card'>
          <img src={Kaimi} className='pokeimg' />
          <h2 className='pokename'>Kaiminus</h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  <li>Hp: 45</li>
                  <li>Defense: 49</li>
                  <li>Special Defense: 65</li>
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                  <img src={Eau} className='imgtype2' />
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
    </div>
    </div>
</div>





<div className="box">
    <h2>Or et Argent</h2>
    <div className="flexcard">
    <div className='card'>
          <img src={Arcko} className='pokeimg' />
          <h2 className='pokename'>Arcko</h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  <li>Hp: 45</li>
                  <li>Defense: 49</li>
                  <li>Special Defense: 65</li>
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                  <img src={Plante} className='imgtype2' />
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
    </div>
    <div className='card'>
          <img src={Poussif} className='pokeimg' />
          <h2 className='pokename'></h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  <li>Hp: 45</li>
                  <li>Defense: 49</li>
                  <li>Special Defense: 65</li>
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                  <img src={Feu} className='imgtype2' />
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
    </div>
    <div className='card'>
          <img src={Gobou} className='pokeimg' />
          <h2 className='pokename'>Gobou</h2>
          <h3>Stats</h3>
          <div className='stats'>
            <div className='containerstats'>
              <div className='stats2'>
                <ul className='list'>
                  <li>Hp: 45</li>
                  <li>Defense: 49</li>
                  <li>Special Defense: 65</li>
                </ul>
              </div>
            </div>
            <div className='type'>
              <h2>Types</h2>
              <div className='imgtype'>
                  <img src={Eau} className='imgtype2' />
              </div>
            </div>
            <button className='btn' onClick={handleAddToTeam}>Ajouter à l'équipe</button>
          </div>
    </div>
    </div>
</div>

</>
    )
}
export default Card; 