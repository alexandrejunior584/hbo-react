import React from "react";
import "./FeaturedMovie.css";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

const FeaturedMovie = ({item}) => {
  return(
    <section className="featured" style={{backgroundSize:'cover', backgroundPosition: 'center', backgroundImage: 
    `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--description">{item.overview}</div>
          <div className="featured--buttons">
            <a className="featured--watchButton"><PlayArrowOutlinedIcon /></a>
            <a className="featured--myListButton">SAIBA MAIS</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie;