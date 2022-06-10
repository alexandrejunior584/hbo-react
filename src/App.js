import React from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Components/Header';

const App = () => {

  const [movies, setMovies] = React.useState([]);
  const [FeaturedData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

  React.useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
      setMovies(list);
      ///////////////////////////////////////////
      let originals = list.filter(i=>i.slug === 'apenas');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  },[])

  React.useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 40){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

  return (
    <div className='page'>
      <Header black={blackHeader}/>

      {FeaturedData && 
        <FeaturedMovie item={FeaturedData} />
      }
      
      <section className='lists'>
        {movies.map((item, key) => (
          <MovieRow title={item.title} item={item.items} key={key} />
        ))}
      </section>

      <footer>
        <div>Criado por Alexandre Junior</div>
        <div>Dados fornecidos pelo Themoviedb.org</div>
      </footer>
    </div>
  );
}

export default App;