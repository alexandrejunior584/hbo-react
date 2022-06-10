import React from "react";
import "./MovieRow.css";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MovieRow = ({title, item}) => {

  const [scrollX, setScrollX] = React.useState(0);

  const handleLeftArrow = ( ) => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
      x = 0
    }

    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = item.results.length * 200;
    if((window.innerWidth - listW) > x){
      x = window.innerWidth - listW - 75;
    }
    setScrollX(x);
  }

  return(
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: '50px'}} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: '50px'}} />
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{marginLeft: scrollX, width: item.results.length * 200}}>
          {item.results.length > 0 && item.results.map((item, key) => (
            <div className="movieRow--item" key={key}>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow;