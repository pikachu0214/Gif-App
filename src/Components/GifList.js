import React from "react";
import Gif from "./Gif";
import NoGifs from "./NoGifs";

const GifList = props => {
  let gifs = props.data.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id}/>);
  return (
    <ul className="gif-list">
      {/* <Gif /> */}
      {gifs.length > 0 ? gifs : <NoGifs />}
    </ul>
  );
};

export default GifList;
