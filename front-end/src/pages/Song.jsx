import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  // Encontra a música atual com base no ID
  const { image, name, duration, artist, audio } = songsArray.find(
    (currentSongObj) => currentSongObj.id === Number(id)
  );

  // Encontra o artista da música atual
  const artistObj = artistArray.find(
    (currentArtistObj) => currentArtistObj.name === artist
  );

  // Filtra as músicas do mesmo artista
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  // Gera IDs aleatórios para as músicas do mesmo artista
  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomIndex2 = Math.floor(Math.random() * songsArrayFromArtist.length);

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2].id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        {/* Passa o arquivo de áudio e a duração para o Player */}
        <Player
          audio={audio}
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;