
import './App.css'
import Header from './assets/components/Header/Header';
import PokList from './assets/components/PokList/PokList';

function App() {
  
  let pokemonsList =[
    {
      name:'Pikachu',
      type:['Electric'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/pikachu.avif',
    },

    {
      name:'Charmander',
      type:['Fire'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/charmander.avif',
    },

    {
      name:'Poliwag',
      type:['Water'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/poliwag.avif',
    },

    {
      name:'Nidoran',
      type:['Poison'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/nidoran-m.avif',
    },

    {
      name:'Sandslash',
      type:['Ground'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/sandslash.avif',
    },

    {
      name:'Caterpie',
      type:['Bug'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/caterpie.avif',
    },

    {
      name:'Pidgeotto',
      type:[' Flying'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/pidgeotto.avif',
    },

    {
      name:'Clefairy',
      type:['Fairy'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/clefairy.avif',
    },

    {
      name:'Meowth',
      type:['Normal'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/meowth.avif',
    },

    {
      name:'Primeape',
      type:['Fighting'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/primeape.avif',
    },

    {
      name:'Dratini',
      type:['Dragon'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/dratini.avif',
    },

    {
      name:'Mew',
      type:['Psychic'],
      photo:'https://img.pokemondb.net/sprites/home/normal/2x/avif/mew.avif',
    },

  ];
  return (
    <div>    
       <Header/>
       <PokList list={pokemonsList}/>
  </div>

  
    )
}

export default App
